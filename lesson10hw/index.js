import { dataNews } from "./data.js";
const data = JSON.parse(dataNews);
console.log(data);
data.forEach(({author, title, doi, url}) => {
    const authorEl = document.querySelector('.author')
    authorEl.textContent = author
    const titleEl = document.querySelector('.title')
    titleEl.textContent = title
    const idxEl = document.querySelector('.idx')
    idxEl.textContent = doi
    const urlEl = document.querySelector('.url')
    urlEl.textContent = url

});