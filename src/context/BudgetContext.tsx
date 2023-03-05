import { createContext, useState, FC, ReactNode } from "react";
import { DateTime } from "luxon";
import shoppingCart from "../assets/shopping-cart.svg";
import house from "../assets/house.svg";
import grid from "../assets/grid.svg";
import bolt from "../assets/bolt.svg";
import smiley from "../assets/smiley.svg";
import car from "../assets/car.svg";
import question from "../assets/question.svg";

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
  date: DateTime;
  amount: number;
}

export type BudgetItem = Transaction | Category;

const addItemToList = <T extends BudgetItem>(list: T[], itemToAdd: T): T[] => {
  const nextId = list.length;

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
}

export const BudgetContext = createContext<BudgetContextValue>({} as BudgetContextValue);

type BudgetProviderProps = {
  children: ReactNode;
}

export const BudgetProvider: FC<BudgetProviderProps> = ({ children }) => {
  const [transactions, setTransactions ] = useState<Transaction[]>([
    {
      id: 0,
      description: "Aldi",
      categoryId: 0,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 1,
      description: "Electric",
      categoryId: 2,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 2,
      description: "Housing",
      categoryId: 1,
      date: DateTime.now(),
      amount: 340,
    },
    {
      id: 3,
      description: "Repairs",
      categoryId: 3,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 4,
      description: "Steam Game",
      categoryId: 4,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 5,
      description: "Whole foods",
      categoryId: 0,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 6,
      description: "Movie",
      categoryId: 5,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 7,
      description: "Movie",
      categoryId: 5,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 8,
      description: "Movie",
      categoryId: 5,
      date: DateTime.now(),
      amount: 34,
    },
    {
      id: 9,
      description: "Movie",
      categoryId: 5,
      date: DateTime.now(),
      amount: 34,
    },
  ]);
  const [categories, setCategories] = useState<Category[]>([
    {
      id: -1,
      name: "Uncategorized",
      icon: question,
      color: "#999999",
      budget: 0,
    },
    {
      id: 0,
      name: "Groceries",
      icon: shoppingCart,
      color: "#db3535",
      budget: 500
    },
    {
      id: 1,
      name: "Rent",
      icon: house,
      color: "#3588db",
      budget: 500
    },
    {
      id: 2,
      name: "Utilities",
      icon: bolt,
      color: "#f79e0f",
      budget: 700
    },
    {
      id: 3,
      name: "Transportation",
      icon: car,
      color: "#7571f8",
      budget: 300
    },
    {
      id: 4,
      name: "Leisure",
      icon: smiley,
      color: "#bf35db",
      budget: 200
    },
    {
      id: 5,
      name: "Misc",
      icon: grid,
      color: "#c41667",
      budget: 500
    },
  ]);
  
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
  };
  
  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}