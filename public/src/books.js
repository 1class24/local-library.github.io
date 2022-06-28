function findAuthorById(authors, id) {
  return authors.find((author) => id === author.id); //function should return name of author that matches input id
}

function findBookById(books, id) {
  return books.find((book) => id ===book.id);
}

function partitionBooksByBorrowedStatus(books) {
  let result1 = books.filter(book => book.borrows[0].returned === false);
  let result2 = books.filter(book => book.borrows[0].returned === true);
  return [result1, result2];
}

function getBorrowersForBook(book, accounts) {
  
  let borrowList = []; 
	let borrows = book.borrows;
  
	borrows.forEach((borrow) => {
      
		accounts.forEach((account) => {
          
			if(account.id === borrow.id){              
				account.returned = borrow.returned;             
				borrowList.push(account);              
			}
		});
	});	 
	return borrowList.slice(0,10);  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
