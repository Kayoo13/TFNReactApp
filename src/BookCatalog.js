import React, {useState} from 'react';
import './styles/BookCatalog.css';
import { sortByTitle, sortByAuthor, sortByCategory } from './sortBooks';
import { addBook } from './addBookForm';

const BookCatalog = ({ books }) => {
    const [sortedBooks, setSortedBooks] = useState(books);  // useState – jest to funkcja, która pozwala na automatyczne odświeżanie tekstów, zdjęć i nie tylko w czasie rzeczywistym na naszej stronie.

    // Funkcja do obsługi zmiany sortowania
    const handleSortChange = (e) => {
        const sortType = e.target.value;
        let sortedArray;

        if (sortType === 'title') {
            sortedArray = sortByTitle(books);
        } else if (sortType === 'author') {
            sortedArray = sortByAuthor(books);
        } else if (sortType === 'category') {
            sortedArray = sortByCategory(books);
        }

        setSortedBooks(sortedArray);
    };

    return (
        <div>
            <h1>Book Catalog</h1>

            <label htmlFor="sortBooks">Sort books:</label>
            <select id="sortBooks" onChange={handleSortChange}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="category">Category</option>
            </select>

            <form onSubmit={(event) => addBook(event, document.getElementById('sortedBooks'))}>
                <input type="text" name="title" placeholder="Title" required />
                <input type="text" name="author" placeholder="Author" required />
                <input type="text" name="category" placeholder="Category" required />
                <textarea name="description" placeholder="Description" required></textarea>
                <button type="submit">Add Book</button>
            </form>

            {sortedBooks.map((book, index) => (
                <div key={index} className={'book-catalog'}>
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Category:</strong> {book.category}</p>
                    <p>{book.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BookCatalog;