export interface IBook {
  id: number; // Use string since IDs from the API are strings
  title: string;
  image: string;
  authors: string;
  url: string;
}
