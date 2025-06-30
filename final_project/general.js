const axios = require('axios');
const express = require('express');
let books = require("./booksdb.js");
const public_users = express.Router();

const getBooksAsync = () => {
  return new Promise((resolve, reject) => {
    resolve(books);
  });
};

public_users.get("/", async function (req, res) {
  try {
    const allBooks = await getBooksAsync();
    res.status(200).send(JSON.stringify(allBooks, null, 4)); // Pretty JSON
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve books" });
  }
});
public_users.get("/isbn/:isbn", async function (req, res) {
  try {
    const isbn = req.params.isbn;
    const allBooks = await getBooksAsync();
    const book = allBooks[isbn];

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving book" });
  }
});


public_users.get("/author/:author", async function (req, res) {
  try {
    const author = req.params.author;
    const allBooks = await getBooksAsync();
    const filteredBooks = Object.values(allBooks).filter(book => book.author === author);

    res.status(200).json(filteredBooks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books by author" });
  }
});

public_users.get("/title/:title", async function (req, res) {
  try {
    const title = req.params.title;
    const allBooks = await getBooksAsync();
    const filteredBooks = Object.values(allBooks).filter(book => book.title === title);

    res.status(200).json(filteredBooks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books by title" });
  }
});

module.exports.general = public_users;
