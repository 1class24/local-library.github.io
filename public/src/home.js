function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.reduce((account, book) => {
    return (account + (!book.borrows[0].returned));
    
  }, 0);
  return borrowedBooks;
}


function groupByIdentifier(array, identifier) {
  return array.reduce((acc, obj) => {
      return Object.assign(acc, { [obj[identifier]]:( acc[obj[identifier]] || [] ).concat(obj)})
    }, {});
}

Object.size = function(obj) {
  var size = 0, identifier;
  for (identifier in obj) {
      if (obj.hasOwnProperty(identifier)) size++;
  }
  return size;
};


function getMostCommonGenres(books) {
    
  const genres = groupByIdentifier(books, 'genre'); 
  let genreResults = [];  
  for (const identifier in genres) {
  genreResults.push({
    name: identifier,
    
    count: Object.size(genres[identifier]), 
  });
}  
  genreResults.sort((bookA, bookB) =>  bookB.count - bookA.count); 
  return genreResults.slice(0,5);      
}

function getMostPopularBooks(books) {  
  return books.map(book => {    
    return {
      name: book.title,
      count: book.borrows.length
    }   
  }).sort((bookA, bookB) => bookB.count - bookA.count).splice(0,5)  
}


function getMostPopularAuthors(books, authors) {
   let authorsResult = [];
  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
     popularAuthor.forEach((book) => {
       
      let author = authors.find((author) => author.id === book.authorId);      
      authorsResult.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });
  return (authorsResult.sort((countA, countB) => countA.count < countB.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
