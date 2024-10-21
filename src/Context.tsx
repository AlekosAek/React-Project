import { createContext } from "react";
import { IBook } from "./interface";

export const EntriesContext = createContext<{
  entries?: IBook[];
  setEntries?: (favoriteDrinks: IBook[]) => void;
}>({});
