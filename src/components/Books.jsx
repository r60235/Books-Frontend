import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const { data, loading, error } = useFetch("https://books-backend.vercel.app/books");
  const [successMessage, setSuccessMessage] = useState('');

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`https://books-backend.vercel.app/books/${bookId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete book.";
      }

      const deletedBook = await response.json(); 

      if (deletedBook) {
        setSuccessMessage("Book Deleted Successfully");
        window.location.reload();
      }
    } catch (err) {
      console.log("An Error occurred.", err);
      setSuccessMessage("Failed to delete book.");
      
    }
  };

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>
            {book.title}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Books;
