import { useState } from "react";

function BookShelf() {
  const [formData, setFormData] = useState({
    title: ``,
    author: ``,
  });

  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setBooks([...books, formData]);
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <>
      <h1>BookShelf</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />

        <button> Create A Book</button>
      </form>
      {books.map((book, index) => (
        <div key={index}>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}
    </>
  );
}

export default BookShelf;
