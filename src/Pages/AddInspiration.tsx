import { useContext, useState } from "react";
import { BooksContext } from "../BooksContext"; // Adjust the import path as needed
import { IBook } from "../interface";

function AddInspiration() {
  const { updateBooks } = useContext(BooksContext);
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [authors, setAuthors] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null); // Add error state if needed

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure title and authors are filled
    if (!title || !authors) {
      setError("Please fill in all fields."); // Use error state to display the message
      return;
    }

    // Create new book object
    const newBook: IBook = {
      id,
      title,
      image,
      authors,
      url,
    };

    // Call the updateBooks function to add the new book
    updateBooks('add', [newBook]); // Pass the new book in an array

    // Clear form inputs after submission
    setTitle(""); // Fixed the method name to setTitle
    setId(0);
    setImage("");
    setAuthors("");
    setUrl("");
    setError(null); // Clear error after successful submission
  };

  return (
    <div className="myInspi">
      <h1>Add New Book</h1> {/* Change heading to reflect the functionality */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if exists */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Authors"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddInspiration;
