document.addEventListener("DOMContentLoaded", () =>{
  let snagForm = document.querySelector("form")
  snagForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let textBoxValue = e.target.textBox.value
    fetch(`http://openlibrary.org/search.json?author=${textBoxValue}&limit=2`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
    
      console.log(data.docs) 
      let booksArr = data.docs
      console.log(booksArr)
      let displayHere = document.getElementById("searchResultsGoHere")
      let table = document.createElement("table")
      let headerRow = document.createElement("tr")
      let createCell = document.createElement("th")
     
      let headers = ["Title: ", " Author:"]

      headers.forEach(headerText => {
        let textCell = document.createTextNode(headerText)
        createCell.appendChild(textCell)
        headerRow.appendChild(createCell)
      })

      table.appendChild(headerRow)
      displayHere.appendChild(table)

      for(let e in booksArr){
      
        let authorName = booksArr[e].author_name 
        let bookTitle = booksArr[e].title
       
        let createRow = document.createElement("tr")
        let titleCell = document.createElement("td")
        titleCell.innerText = `${bookTitle}`
        let authorCell = document.createElement("td")
        authorCell.innerText = `${authorName}`
        createRow.appendChild(titleCell)
        createRow.appendChild(authorCell)
        table.appendChild(createRow)
        snagForm.reset() 
      }

      let snagClear = snagForm.querySelector("#revert")
      snagClear.addEventListener("click", e => {
        displayHere.remove(displayHere)
      }) 
    })
  })
  })
