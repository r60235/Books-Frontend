import useFetch from "../useFetch";

const BooksByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:5003/books/${title}`
  );

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>Error: {error}</p>;
 
  return data ? (
    <div>
      <h2>Title: {data.title}</h2>
          <p><strong>Title: </strong> {data.title} </p>
          <p><strong>Author: </strong> {data.author} </p>
          <p><strong>Genre: </strong> {data.genre} </p>
          <p><strong>Publish Year: </strong> {data.publishYear} </p>
          <p><strong>Language: </strong>{data.language} </p>
          <p><strong>Rating: </strong> {data.rating} </p>
          <p><strong>Summary: </strong>{data.summary} </p>
    </div>
  ) : (
    <p>Book not found</p>
  );
};

export default BooksByTitle;
