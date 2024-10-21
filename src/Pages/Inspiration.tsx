import { IBook } from "../interface";
import { useState, useEffect, useContext } from "react";
import { BooksContext } from "../BooksContext";
import "../Components/css/Inspiration.css";

function Inspiration() {
  const { books: userBooks } = useContext(BooksContext); // Get books from context
  const [fetchedBooks, setFetchedBooks] = useState<IBook[]>([]);
  const [error, setError] = useState<string | null>(null);
  const BooksSize = 6;
  const [showCount, setShowCount] = useState<number>(BooksSize);

  const showMoreEntries = () => {
    setShowCount((prev) => prev + BooksSize);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.dbooks.org/api/recent");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.books && Array.isArray(data.books)) {
          const bookData = data.books.map((book: IBook) => ({
            id: book.id,
            title: book.title || "Unknown Title",
            image: book.image || "https://via.placeholder.com/150",
            authors: book.authors || "Unknown Authors",
            url: book.url || "#",
          }));
          setFetchedBooks(bookData);
        } else {
          console.error("Fetched data does not contain a books array");
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching books:", err);
          setError(err.message);
        } else {
          console.error("Unexpected error:", err);
          setError("An unexpected error occurred.");
        }
      }
    };
    fetchData();
  }, []);

  // Combine context books and fetched books
  const combinedBooks = [...userBooks, ...fetchedBooks];

  return (
    <div className="myInspi">
      <h1>Books</h1>
      {error && <p>Error: {error}</p>}
      <ul className="ispirationUl">
        {combinedBooks.slice(0, showCount).map((book) => (
          <li className="ispirationLi" key={book.id}>
            <h2>{book.title}</h2>
            <p><strong>Authors:</strong> {book.authors}</p>
            <img src={book.image} alt={book.title} />
            <a href={book.url} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          </li>
        ))}
      </ul>
      {showCount < combinedBooks.length && (
        <button onClick={showMoreEntries}>Show More</button>
      )}
    </div>
  );
}

export default Inspiration;
