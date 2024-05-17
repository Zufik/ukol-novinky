



const bodyElement = document.querySelector ("body")
const newsElement = document.querySelector (".news")
const title = document.querySelector ("h1")
const firstNews = document.querySelector ("#zprava1")
const obrazek = document.querySelector ("#zprava3 img")

bodyElement.style.backgroundColor = "#e9e9e9"
newsElement.style.backgroundColor = "white"
newsElement.style.maxWidth = "60rem"
title.classList.add("news__title")
title.textContent = "Aktuální novinky"
firstNews.classList.add("post--main")
obrazek.src = "images/zprava3-novy.jpg"


