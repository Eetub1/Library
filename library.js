let myLibrary = [];

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

    addBookToLibrary(title, author, pages);
    form.reset();
    popup.close();
    container.innerHTML = "";
    showBooks();
})

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function showBooks() {
    myLibrary.forEach((book) => displayBook(book.title, book.author, book.pages));
}

function deleteBook(bookContainer, title) {
    bookContainer.remove();
    myLibrary = myLibrary.filter((book) => book.title !== title);
}

function changeReadStatus(status) {
    if (status.textContent === "Read") {
        status.textContent = "Not Read";
    }
    else {
        status.textContent = "Read";
    }
}

function displayBook(title, author, pages) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book");

    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const readText = document.createElement("p");

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteBook(bookContainer, title));

    const toggleStatus = document.createElement("button");
    toggleStatus.id = "toggleBtn";
    toggleStatus.textContent = "Toggle status";
    toggleStatus.addEventListener("click", () => changeReadStatus(readText));

    titleText.textContent = `Title: ${title}`;
    authorText.textContent = `Author: ${author}`;
    pagesText.textContent = `Page count: ${pages}`;
    readText.textContent = "Read";

    bookContainer.appendChild(titleText);
    bookContainer.appendChild(authorText);
    bookContainer.appendChild(pagesText);
    bookContainer.appendChild(readText);
    bookContainer.appendChild(deleteBtn);
    bookContainer.appendChild(toggleStatus);
    container.appendChild(bookContainer);
}

addBookToLibrary("Blood Meridian", "Cormac Mccarthy", 311);

showBooks();