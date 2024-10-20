import React from 'react';
import ReactDOM from 'react-dom';
//import {createRoot} from "react-dom/client";
import BookCatalog from './BookCatalog';

const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        category: 'Fiction',
        description: 'A novel about the serious issues of race, class, gender, and justice.'
    },
    {
        title: '1984',
        author: 'George Orwell',
        category: 'Dystopian',
        description: 'A chilling depiction of a totalitarian regime and mass surveillance.'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Classic',
        description: 'A novel about the American dream and the disillusionment of the Jazz Age.'
    }
];

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<BookCatalog tab="home" />)

ReactDOM.render(
    <BookCatalog books={books} />,
    document.getElementById('root')
);
