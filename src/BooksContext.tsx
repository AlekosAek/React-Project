import { createContext, ReactNode, useState } from "react";
import { IBook } from "./interface"

interface BooksContextData {
  books: IBook[]; // You can specify a more detailed type here based on your driver structure
  updateBooks: (action: string, value: IBook[]) => void;
}

interface BookProviderProps {
  children: ReactNode;
}

export const BooksContext = createContext<BooksContextData>({
  books: [],
  updateBooks: () => {},
});

export const BooksProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<IBook[]>([]);

  const updateBooks = (action: string, value: IBook[]) => {
    switch (action) {
      case 'add':
        setBooks(prevBooks => [...prevBooks, ...value]); // Use spread operator to add new drivers
        break;
      case 'delete':
        // Functionality for deleting a driver (not implemented here)
        break;
      case 'update':
        // Functionality for updating a driver (not implemented here)
        break;
      case 'set':
        setBooks(value); // Overwrite all drivers with the provided array
        break;
      default:
        break;
    }
  };

  return (
    <BooksContext.Provider value={{ books, updateBooks }}>
      {children}
    </BooksContext.Provider>
  );
}
