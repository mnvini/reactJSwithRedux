export function selectBook(book) {
  //selectBook is in actionCreator, it needs to return an action,
  //an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }

}