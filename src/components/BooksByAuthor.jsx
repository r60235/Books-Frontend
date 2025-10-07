import useFetch from "../useFetch";

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://books-backend.vercel.app/books/author/${author}`
  );

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (
      <div>
        <h2>Books by {author}</h2>
        <p>Error: {error}</p> 
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div>
        <h2>Books by {author}</h2>
        <p>No books found by this author.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Books by {author}</h2>
        {data?.map((book) => (
          <div>
          <p><strong>Title: </strong> {book.title} </p>
          <p><strong>Author: </strong> {book.author} </p>
          <p><strong>Genre: </strong> {book.genre} </p>
          <p><strong>Publish Year: </strong> {book.publishYear} </p>
          <p><strong>Language: </strong>{book.language} </p>
          <p><strong>Rating: </strong> {book.rating} </p>
          <p><strong>Summary: </strong>{book.summary} </p>
        </div>
        ))}
    </div>
  );
};

export default BooksByAuthor;
