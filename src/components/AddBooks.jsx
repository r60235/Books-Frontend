import React, { useState, useEffect } from 'react';

const AddBookForm = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    publishedYear: '',
    genre: '',
    language: '',
    country: '',
    rating: '',
    summary: '',
    coverImageUrl: ''
  });

  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await fetch('https://books-backend.vercel.app/books');
      const data = await response.json();
      setBooks(data); 
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://books-backend.vercel.app/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData), 
      });

      if (!response.ok) {
        throw 'Failed to add book';
      }

      fetchBooks();

      setBookData({
        title: '',
        author: '',
        publishedYear: '',
        genre: '',
        language: '',
        country: '',
        rating: '',
        summary: '',
        coverImageUrl: ''
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <br />
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Author:
          <br />
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Published Year:
          <br />
          <input
            type="number"
            name="publishedYear"
            value={bookData.publishedYear}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Genre:
          <br />
          <input
            type="text"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Language:
          <br />
          <input
            type="text"
            name="language"
            value={bookData.language}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Country:
          <br />
          <input
            type="text"
            name="country"
            value={bookData.country}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Rating:
          <br />
          <input
            type="number"
            name="rating"
            value={bookData.rating}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Summary:
          <br />
          <textarea
            name="summary"
            value={bookData.summary}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Cover Image URL:
          <br />
          <input
            type="text"
            name="coverImageUrl"
            value={bookData.coverImageUrl}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <button type="submit">Add Book</button>
      </form>

    
    </div>
  );
};

export default AddBookForm;
