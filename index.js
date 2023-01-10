document.addEventListener("DOMContentLoaded", () =>{
  let snagForm = document.querySelector("form")
  snagForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let textBoxValue = e.target.textBox.value
   //console.log(textBoxValue)
    fetch(`http://openlibrary.org/search.json?author=${textBoxValue}&limit=10`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data) //get full author array
      console.log(data.docs) //get book indices 
      let booksArr = data.docs
      
      let displayHere = document.getElementById("searchResultsGoHere")
      let table = document.createElement("table")
      let headerRow = document.createElement("tr")
      headerRow.setAttribute("class", "headerRows")
      let header = document.createElement("th")
     
      let headers = ["Title ", "Author ", "Edit "]

      headers.forEach(headerText => {
        console.log(headerText) //header array
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header) //.appendChild(btn) <--does not go here
      })

      table.appendChild(headerRow)
      displayHere.appendChild(table)

      for(let e in booksArr){
        //console.log(e) //index numbers
        let authorName = booksArr[e].author_name 
        //console.log(authorName)//gives me the array with the author's name
        let bookTitle = booksArr[e].title
        //console.log(bookTitle)// gives me all the title
        
        let readNextBtn = document.createElement("button")
        let wishListBtn = document.createElement("button")
        let createRow = document.createElement("tr")
        let titleCell = document.createElement("td")
        titleCell.innerText = `${bookTitle}`
        let authorCell = document.createElement("td")
        authorCell.innerText = `${authorName}`
        createRow.appendChild(titleCell)
        createRow.appendChild(authorCell)
        createRow.appendChild(readNextBtn).innerText = "Read Next"
        createRow.appendChild(wishListBtn).innerText = "Wish List"
        table.appendChild(createRow)
        snagForm.reset()  

        // btn.addEventListener("click", (e) => {
          
        // })
      }
      let snagClear = snagForm.querySelector("#bye")
      
      snagClear.addEventListener("click", e => {
        displayHere.remove(displayHere)
      }) 

  })


  






























  })
})