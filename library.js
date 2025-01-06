const myLibrary = [];

const container = document.getElementById("container");
const addBookBtn = document.getElementById("addBook");
const popup = document.querySelector("dialog");
const closeBtn = document.getElementById("close");
const form = document.getElementById("form");

closeBtn.addEventListener("click", () => popup.close());
addBookBtn.addEventListener("click", () => popup.showModal());

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pageCount").value;
    const status = document.getElementById("status").value;

    addBookToLibrary(title, author, pages, status);
    form.reset();
    popup.close();
    container.innerHTML = "";
    showBooks();
})

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function showBooks() {
    myLibrary.forEach((book) => displayBook(book.title, book.author, book.pages, book.readStatus));
}

function displayBook(title, author, pages, readStatus) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book");
    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const readText = document.createElement("p");
    titleText.textContent = `Title: ${title}`;
    authorText.textContent = `Author: ${author}`;
    pagesText.textContent = `Page count: ${pages}`;
    readText.textContent =`Status: ${readStatus}`;
    bookContainer.appendChild(titleText);
    bookContainer.appendChild(authorText);
    bookContainer.appendChild(pagesText);
    bookContainer.appendChild(readText);
    container.appendChild(bookContainer);
}

addBookToLibrary("Blood Meridian", "Cormac Mccarthy", 311, "Luettu");

showBooks();