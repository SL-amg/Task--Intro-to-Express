const express = require("express");
const app = express();
const port = 8000;
const books = require("./books") // as import from the array and use it in our app 
app.use(express.json()) // this is the main configration must use for create or post U HAVE To USE IT
//----- Def and imorts and required data


// class notes for Day 1 and Task from noton -----------------------------------

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send({ name: "Abdullah Al Abbas", age: "36", Job: "KOC" });
});

// to use jason .. perfer use get and post  ..

app.get("/me", (req, res) => {
  res.json({ name: "Salah Al Abbas", age: "55", Job: "Teacher" });
});

// class notes for Day 2 -----------------------------------
// class notes for Day 2  ,, to get values from the array we created in books.js-----------------------------------
// first import at top we use require !! 

app.get('/books', (req, res) => { // to call my array from books.js that we have crated
  res.json(books) // to call array
});
//if we use http://localhost:8000/books it will show the array of books

// to call out one book from the array

app.get('/books/:bookId', (req, res) => { // to call one item from array and we use the link http://localhost:8000/books/3
  //bookID is what we put in the linl books/3 for example
  const {bookId} =   req.params // we use the function res.params and we decode the bookId
  const book = books.find((book)=> book.id == bookId) // first we use find function to find the book form books array , and use arro function to check that the book.id is mataching with bookID we added in URL ,, use normal equailty to take it as a string
  console.log(book) // to print the book requested the function we created top
  res.json(book) // to call the required book
});
// if we call http://localhost:8000/books/1 it will call the first book
// if we call http://localhost:8000/books/2 it will call the second book
// if we call http://localhost:8000/books/4 it will call EMPTY book since not defined in array we have to make a function to show response

// class notes for Day 2 to creat a new book array .. --------------------------------

//2 then we  creat a function
const creatNewBook= (data)=>{
  console.log("Creating new book", data)
  //database.create newBook
  return data
}
//finst we create this:
app.post("/books", (req, res) => {
  const newBook = creatNewBook(req.body); // have to add body to function .. take the valuesi n body postmen and put it in the function creatNewBook
  res.status(201).json(newBook); // for new recored or post we use 201 IMPORTANT check http codes for info
});




//----------- keep always at the END

app.listen(port, () => {
  console.log(`this is my first BackEnd Server and it is online at ${port}`);
});
