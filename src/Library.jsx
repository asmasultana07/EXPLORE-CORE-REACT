import Book from "./Book";

export default function Library({books}){
    return (
        <div>
            <h2>My mental Heath is okay.</h2>
            <p>book collection: {books.length}</p>
            <p>Address: </p>
            <ul>
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </ul>
        </div>
    )
}