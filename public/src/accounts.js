function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
  return found;
}

function sortAccountsByLastName(accounts) {
 let results = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1)); 
 return results
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const idCount = book.borrows.filter(borrow => borrow.id === account.id).length
    return total + idCount
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const accInfo = account.id;
  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);

  let bookDetails = booksPossessed.map((detail) => ({...detail, author: authors.find((author) => author.id === detail.authorId)
  }))
    return bookDetails;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
