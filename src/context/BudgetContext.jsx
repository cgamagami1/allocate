import { createContext } from "react";

export const BudgetContext = createContext({
  transactions: [],
  categories: []
});

export const BudgetProvider = ({ children }) => {
  const value = {
    transactions: [
      {
        id: 0,
        description: "Aldi",
        categoryId: 0,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 1,
        description: "Electric",
        categoryId: 2,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 2,
        description: "Housing",
        categoryId: 1,
        date: "April 16th, 2023",
        amount: 340,
      },
      {
        id: 3,
        description: "Repairs",
        categoryId: 3,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 4,
        description: "Steam Game",
        categoryId: 4,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 5,
        description: "Whole foods",
        categoryId: 0,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 6,
        description: "Movie",
        categoryId: 5,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 7,
        description: "Movie",
        categoryId: 5,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 8,
        description: "Movie",
        categoryId: 5,
        date: "April 16th, 2023",
        amount: 34,
      },
      {
        id: 9,
        description: "Movie",
        categoryId: 5,
        date: "April 16th, 2023",
        amount: 34,
      },
    ],
    categories: [
      {
        id: 0,
        name: "Groceries",
        icon: "shopping-cart",
        color: "#db3535",
        budget: 500
      },
      {
        id: 1,
        name: "Rent",
        icon: "house",
        color: "#3588db",
        budget: 500
      },
      {
        id: 2,
        name: "Utilities",
        icon: "bolt",
        color: "#f79e0f",
        budget: 700
      },
      {
        id: 3,
        name: "Transportation",
        icon: "car",
        color: "#7571f8",
        budget: 300
      },
      {
        id: 4,
        name: "Leisure",
        icon: "smiley",
        color: "#bf35db",
        budget: 200
      },
      {
        id: 5,
        name: "Misc",
        icon: "grid",
        color: "#c41667",
        budget: 500
      },
    ]
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}