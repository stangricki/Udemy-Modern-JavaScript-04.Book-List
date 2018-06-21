// Book constructor
function Book(title, author, isbn){
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Elements

const bookForm = document.getElementById('book-list-form'); 
const bookTable = document.getElementById('book-list-table');
const bookTableBody = document.getElementById('book-table-body');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');

bookForm.addEventListener('submit', validate); 

// Input Validation
function validate(e){
	e.preventDefault()
	if(titleInput.value === "" || authorInput.value === "" || isbnInput.value === "") {
		showErrorMessage()
	} else {
		addBook(e);
		showSuccessMessage()
	}
}

// Error message
function showErrorMessage(){
	const errorMessage = document.createElement('p');
	errorMessage.innerText = "Please fill all input fields";
	errorMessage.classList.add('error');
	bookForm.appendChild(errorMessage);
	setTimeout(function(){bookForm.removeChild(errorMessage)}, 3000)
}

//Success message
function showSuccessMessage(){
	const successMessage = document.createElement('p');
	successMessage.innerText = "Book added to your list";
	successMessage.classList.add('success');
	bookForm.appendChild(successMessage);
	setTimeout(function(){bookForm.removeChild(successMessage)}, 3000)
}

// Adds book
function addBook(e){
	const book = new Book(titleInput.value, authorInput.value, isbnInput.value)
	
	// Creates new teble row
	const tr = document.createElement('tr');
	
	// Adds Title
	const bookTitle = document.createElement('td');
	bookTitle.innerText = book.title;
	
	// Adds author
	const bookAuthor = document.createElement('td');
	bookAuthor.innerText = book.author;
	
	// Adds ISBN
	const bookISBN = document.createElement('td');
	bookISBN.innerText = book.isbn;
	
	//Adds Delete Button
	const deletePositionButton = document.createElement('td');
	deletePositionButton.innerText = "x"
	
	//Appends all elements
	tr.appendChild(bookTitle);
	tr.appendChild(bookAuthor);
	tr.appendChild(bookISBN);	
	tr.appendChild(deletePositionButton);
	bookTableBody.appendChild(tr)
}