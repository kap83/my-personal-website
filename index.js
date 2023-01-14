document.addEventListener("DOMContentLoaded", () =>{
  let snagForm = document.querySelector("form")
  snagForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let textBoxValue = e.target.textBox.value
    fetch(`http://openlibrary.org/search.json?author=${textBoxValue}&limit=5`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
    
      console.log(data.docs) 
      let booksArr = data.docs
      console.log(booksArr)

      let displayHere = document.getElementById("searchResultsGoHere")
      let table = document.createElement("table")
   
      displayHere.appendChild(table)
      
      booksArr.forEach(book => {
        console.log(book.author_name)

        let authorName = book.author_name
        let bookTitle = book.title
       
        let createRow = document.createElement("tr")
        let titleCell = document.createElement("td")
        titleCell.innerText = `${bookTitle}`
        let authorCell = document.createElement("td")
        authorCell.innerText = `${authorName}`
        createRow.appendChild(titleCell)
        createRow.appendChild(authorCell)
        table.appendChild(createRow)
        snagForm.reset()
      })

      let snagClear = snagForm.querySelector("#clearField")
      snagClear.addEventListener("click", e => {
        displayHere.remove(displayHere)
      }) 
    })
  })
  })
