import BookCatalog from "./BookCatalog";
import React from "react";
import reactDOM from "react-dom";
export const addBook = (event, booksContainer) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    // Pobierz wartości z formularza
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const description = event.target.description.value;

    // Utwórz nowy element div dla książki
    const newBookDiv = document.createElement('div');
    newBookDiv.className = 'book-catalog';
    newBookDiv.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
    `;

    // Dodaj nowy element książki do kontenera
        booksContainer.appendChild(newBookDiv);

    // Wyczyść formularz
    event.target.reset();
};
