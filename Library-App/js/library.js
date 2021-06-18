let buttonid=document.getElementById('buttonid');
let bookid=document.getElementById('bookid');
let authorid=document.getElementById('authorid');
let linkid=document.getElementById('linkid');
let html="";
class Book{
    constructor(book,author,genre,link)
    {
        this.book=book;
        this.author=author;
        this.genre=genre;
        this.link=link;
    }
}
class Events{
    setBook(b)
    {
        let books=JSON.parse(localStorage.getItem('Book'));
        if(books==null)
        {
            books=[];
        }
        books.push(b);
        localStorage.setItem('Book',JSON.stringify(books));
    }
    getBook()
    {
        let books=JSON.parse(localStorage.getItem('Book'));
        return books;
    }
    displayBook(books)
    {
        if(books!=null){
        html="";
        books.forEach(function(b,index) {
            let tableid=document.getElementById('tableid');
            html+=` 
                    <tr>
                    <th scope="row">${index+1}</th>
                    <td>${b.book}</td>
                    <td>${b.author}</td>
                    <td>${b.genre}</td>
                    <td><a href="${b.link}">Book Link</a></td>
                    </tr>`;
            tableid.innerHTML=html;    
        }
        );
    }
    }
}
let bookEvent=new Events();
let books=bookEvent.getBook();
bookEvent.displayBook(books);
buttonid.addEventListener("click",buttonClick);
function buttonClick(e){
e.preventDefault();
let b=new Book(bookid.value,authorid.value,genreid.value,linkid.value);
bookEvent.setBook(b);
books=bookEvent.getBook();
let messageid=document.getElementById('messageid');
bookEvent.displayBook(books);
if(b.book.length>0 && b.author.length>0 && b.link.length>0)
    {
        messageid.innerHTML=`<div class="success alert-warning" role="alert"> Success! </div>`;
    }
else
    messageid.innerHTML=`<div class="alert alert-warning" role="alert"> Error! Some Fields are empty</div>`;
setTimeout(() => {
    messageid.innerHTML="";
}, 2000);
}