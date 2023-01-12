document.addEventListener("DOMContentLoaded", () =>{
  //fetch json data for Read Next & Wish List tables
  fetch(`http://localhost:3000/books`, {
    method: "GET", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify()
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let dataRN = data["Read_Next"]
    let dataWL = data["Wish_List"]


    let tableRN = document.querySelector("#to-read")
    let tableWL = document.querySelector("#wishList")
   // console.log(tableRN)
    for(let e in dataRN){
      let readNextBook = dataRN[e].title
      let readNextAuthor = dataRN[e].author_name

      let nextDeleteBtn = document.createElement("button")
      nextDeleteBtn.setAttribute("class", "nextRemovebtn")
      nextDeleteBtn.innerText = "x"
      let nextRow = document.createElement("tr")
      let titleCell = document.createElement("td")
      titleCell.innerText = `${readNextBook}`
      let authorCell = document.createElement("td")
      authorCell.innerText = `${readNextAuthor}`
      nextRow.append(titleCell, authorCell, nextDeleteBtn)
      tableRN.append(nextRow)
    }

    for(let ele in dataWL){
      let wishListBook = dataWL[ele].title
      let wishListAuthor = dataWL[ele].author_name

      let wishDeleteBtn = document.createElement("button")
      wishDeleteBtn.setAttribute("class", "wishRemovebtn")
      wishDeleteBtn.innerText = "x"
      let moveToRead = document.createElement("button")
      moveToRead.setAttribute("class", "moveTobtn")
      moveToRead.innerText = "Add to Read Next"
      let wishRow = document.createElement("tr")
      let WishTitleCell = document.createElement("td")
      WishTitleCell.innerText = `${wishListBook}`
      let wishAuthorCell = document.createElement("td")
      wishAuthorCell.innerText = `${wishListAuthor}`
      wishRow.append(wishListBook, wishListAuthor, wishDeleteBtn, moveToRead)
      tableWL.append(wishRow)
    }

    // document.querySelector(".removebtn").addEventListener("click", e => {
    //   //console.log(e) //maybe this and other deletes can all be put under 1 function? 
    // })
    
// fetch for the search function
  let snagForm = document.querySelector("form")
  snagForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let textBoxValue = e.target.textBox.value
   //console.log(textBoxValue)
    fetch(`http://openlibrary.org/search.json?author=${textBoxValue}&limit=5`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data) //get full author array
      console.log(data.docs) //get book indices 
      let booksArr = data.docs
      console.log(booksArr)
      let displayHere = document.getElementById("searchResultsGoHere")
      let table = document.createElement("table")
      let headerRow = document.createElement("tr")
      headerRow.setAttribute("class", "headerRows")
      let createCell = document.createElement("th")
     
      let headers = ["Title ", "Author ", "Edit "]

      headers.forEach(headerText => {
        console.log(headerText) //header array
        let textCell = document.createTextNode(headerText)
        createCell.appendChild(textCell)
        headerRow.appendChild(createCell) //.appendChild(btn) <--does not go here
      })

      table.appendChild(headerRow)
      displayHere.appendChild(table)

      for(let e in booksArr){
        //console.log(e) //index numbers
        let bookId = booksArr[e]
        
        let authorName = booksArr[e].author_name 
        //console.log(authorName)//gives me the array with the author's name
        let bookTitle = booksArr[e].title
        //console.log(bookTitle)// gives me all the title
        
        let readNextBtn = document.createElement("button")
        readNextBtn.setAttribute("class", "nextBtn")
        let wishListBtn = document.createElement("button")
        wishListBtn.setAttribute("class", "wishBtn")
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

        document.querySelector(".nextBtn").addEventListener("click", () => moveToReadNext(bookId))
      }

      function moveToReadNext(bookInfo){
        console.log(bookInfo)
      
  
          fetch(`http://localhost:3000/books/Wish_List/${bookInfo}`,{
          method: 'Patch', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(bookInfo)
          })
          .then(res => res.json())
          .then(data => console.log(data))
         
      }

      let snagClear = snagForm.querySelector("#bye")
      snagClear.addEventListener("click", e => {
        displayHere.remove(displayHere)
      }) 

   
     
    })
  })


  






























  })
})