const axios = require('axios');

// Task 10
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log("Books:", response.data);
    } catch (error) {
        console.error("Error fetching all books:", error.message);
    }
}

// Task 11
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
        console.log("Book by ISBN:", response.data);
    } catch (error) {
        console.error("Error fetching book by ISBN:", error.message);
    }
}

// Task 12
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/author/${author}`);
        console.log("Books by Author:", response.data);
    } catch (error) {
        console.error("Error fetching books by author:", error.message);
    }
}

// Task 13
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/title/${title}`);
        console.log("Books by Title:", response.data);
    } catch (error) {
        console.error("Error fetching books by title:", error.message);
    }
}
 getAllBooks();                     // Task 10
// getBookByISBN(1);                 // Task 11
// getBooksByAuthor("Unknown");     // Task 12
// getBooksByTitle("Fairy tales");  // Task 13
