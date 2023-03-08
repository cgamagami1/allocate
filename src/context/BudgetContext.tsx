import { createContext, useState, FC, ReactNode, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { doc, setDoc, runTransaction, DocumentData } from "firebase/firestore";
import { db } from "../utils/firebase-config";

export type Category = {
  id: number;
  name: string;
  icon: string;
  color: string;
  budget: number;
}

export type Transaction = {
  id: number;
  description: string;
  categoryId: number;
  date: string;
  amount: number;
}

export type BudgetItem = Transaction | Category;

const addItemToList = <T extends BudgetItem>(list: T[], itemToAdd: T): T[] => {
  const nextId = list.reduce((max, current) => Math.max(max, current.id), 0) + 1;

  return [...list, { ...itemToAdd, id: nextId, }];
}

const editItemInList = <T extends BudgetItem>(list: T[], itemToEdit: T): T[] => {
  return list.map(item => item.id === itemToEdit.id ? itemToEdit : item);
}

const removeItemFromList = <T extends BudgetItem>(list: T[], itemToRemove: T): T[] => {
  return list.filter(item => item.id !== itemToRemove.id);
}

const removeCategoryFromTransactions = (transactions: Transaction[], categoryToRemove: Category): Transaction[] => {
  return transactions.map(transaction => {
    return { 
      ...transaction, 
      categoryId: categoryToRemove.id === transaction.categoryId ? -1 : transaction.categoryId
    }
  });
}

type BudgetContextValue = {
  transactions: Transaction[];
  categories: Category[];
  addTransaction(transactionToAdd: Transaction): void;
  editTransaction(transactionToEdit: Transaction): void;
  removeTransaction(transactionToRemove: Transaction): void;
  addCategory(categoryToAdd: Category): void;
  editCategory(categoryToEdit: Category): void;
  removeCategory(categoryToRemove: Category): void;
  isBudgetLoading: boolean;
}

export const BudgetContext = createContext<BudgetContextValue>({} as BudgetContextValue);

type BudgetProviderProps = {
  children: ReactNode;
}

export const BudgetProvider: FC<BudgetProviderProps> = ({ children }) => {
  
  const { user } = useContext(UserContext);

  const [transactions, setTransactions ] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isBudgetLoading, setIsBudgetLoading] = useState(true);

  useEffect(() => {
    const getBudgetData = async () => {
      if (user && isBudgetLoading) {
        const userDoc = doc(db, "users", user.uid);

        const budgetData = await runTransaction(db, async (transaction): Promise<DocumentData> => {
          const budgetResponse = await transaction.get(userDoc);

          if (budgetResponse.exists()) return budgetResponse.data();
          
          const defaultDataResponse = await transaction.get(doc(db, "users", "DEFAULT_BUDGET"));

          if (defaultDataResponse.exists()) {
            await transaction.set(userDoc, { transactions: defaultDataResponse.data().transactions, categories: defaultDataResponse.data().categories });
            return defaultDataResponse.data();
          }
          else {
            throw new Error("Could not retreive default data");
          }
        });
        
        setTransactions(budgetData.transactions);
        setCategories(budgetData.categories);
        setIsBudgetLoading(false);
      }
    }

    getBudgetData();
  }, [user]);
  
  useEffect(() => {
    const setBudgetData = async () => {
      if (user && !isBudgetLoading) {
        const userDoc = doc(db, "users", user.uid);
        
        await setDoc(userDoc, { transactions: transactions, categories: categories });
      }
    }

    setBudgetData();
  }, [transactions, categories]);
  
  const addTransaction = (transactionToAdd: Transaction): void => setTransactions(addItemToList<Transaction>(transactions, transactionToAdd));

  const editTransaction = (transactionToEdit: Transaction): void => setTransactions(editItemInList<Transaction>(transactions, transactionToEdit));

  const removeTransaction = (transactionToRemove: Transaction): void => setTransactions(removeItemFromList<Transaction>(transactions, transactionToRemove));

  const addCategory = (categoryToAdd: Category): void => setCategories(addItemToList<Category>(categories, categoryToAdd));

  const editCategory = (categoryToEdit: Category): void => setCategories(editItemInList<Category>(categories, categoryToEdit));

  const removeCategory = (categoryToRemove: Category): void => {
    setCategories(removeItemFromList(categories, categoryToRemove))
    setTransactions(removeCategoryFromTransactions(transactions, categoryToRemove));
  }

  const value: BudgetContextValue = {
    transactions,
    categories,
    addTransaction,
    editTransaction,
    removeTransaction,
    addCategory,
    editCategory,
    removeCategory,
    isBudgetLoading,
  };
  
  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}