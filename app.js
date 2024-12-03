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

// --------------------------------------------------------------------- class notes for Day 2 -----------------------------------


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
  if(book){
    res.status(200).json(book)
  }
  else{
    res.status(404).json() // if we used http://localhost:8000/books/4 it will show 404 error
  }
  //res.json(book) // to call the required book
});
// if we call http://localhost:8000/books/1 it will call the first book
// if we call http://localhost:8000/books/2 it will call the second book
// if we call http://localhost:8000/books/4 it will call EMPTY book since not defined in array we have to make a function to show response we shoud get 404 error
//therefor to solve this we add the follwoing in the fop app.get
// if(book){
//   res.status(200).json(book)
// }
// else{
//   res.status(404).json() 
// }



// class notes for Day 2 to creat a new book array .. --------------------------------

/*
// then  (2) we  creat a function

const creatNewBook= (data)=>{
  console.log("Creating new book", data)
  return data
}
//first (1) we create this:

app.post("/books", (req, res) => {
  const newBook = creatNewBook(req.body); // have to add body to function .. take the valuesi n body postmen and put it in the function creatNewBook
  res.status(201).json(newBook); // for new recored or post we use 201 IMPORTANT check http codes for info
});
*/ // we committed this to add a new book since we used the sae function


// class notes for Day 2  ,, to delete book by link and postman -----------------------------------

const deleteBook = (bookIdToBeDeleted) => {
  const newBooks = books.filter((book) => book.id != bookIdToBeDeleted)
  console.log("My new books are: ", newBooks)
}
app.delete('/books/:bookId', (req, res) => {
  const { bookId } = req.params
  const book = books.find((book) => book.id == bookId);
  if (book) {
      deleteBook(bookId)
      res.status(204).end()
  } else {
      res.status(404).json()
  }
})

// class notes for Day 2  ,, to Modify book details -----------------------------------

const updateBook = (currentBook, newData) => {
  const myUpdatedBook = Object.assign(currentBook, newData) // to add to object to make one
  return myUpdatedBook
}
app.put('/books/:bookId', (req, res) => {
  const { bookId } = req.params
  const book = books.find((book) => book.id == bookId);
  if (book) {
      const updatedBook = updateBook(book, req.body)
      res.status(200).json(updatedBook)
  } else {
      res.status(404).json()
  }
})

// class notes for Day 2  ,, to add a  book to list with number 4 id-----------------------------------
const createNewBook = (newBookData) => {
  console.log("Creating new book", newBookData)
  const newId = books.length + 1 // to add the id number 4 by using length of array
  const newBook = Object.assign({ id: newId }, newBookData) 
  console.log("My new book is: ", newBook)
  return newBook
}
app.post('/books', (req, res) => {
  const newBook = createNewBook(req.body);
  res.status(201).json(newBook)
})

///// LOOOOK at Video for details day 2 Express 

//----------- keep always at the END

app.listen(port, () => {
  console.log(`this is my first BackEnd Server and it is online at ${port}`);
});