import { createContext, useState } from "react";

const DATABASE_ID = "68b6d9980002ad71c3b0"
const COLLECTION_ID = "books" 

export const BooksContext = createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])

    async function fetchBooks() {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchBookById(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function createBook(data) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function deleteBook(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBooks, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}