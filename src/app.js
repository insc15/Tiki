// Take data from database
import data from '../db.json' assert {type: 'json'}
console.log(data)
// Take the dom
const bookListElement = document.querySelector('#book-list')

let _content = ""
data.forEach(function(book) {
    _content = _content + /*html*/`
    <a href="./detail/index.html?id=${book.id}">
        <img class="max-h-[200px] w-auto" src="${book.images[0].base_url}" alt="">
        <p>Tiki now</p>
        <p>Giao hàng hoả tốc</p>
        <p>${book.name}</p>
        <p>${book.original_price}</p>
        <p>${book.rating_average}</p>
        <p>${book.quantity_sold?.text}</p>
    </a>
    `
})

bookListElement.innerHTML = _content
