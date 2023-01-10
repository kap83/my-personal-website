
//document.addEventListener("DOMContentLoaded", init)

/**************
gobal variables
***************/
let snagForm = document.querySelector("form")
//console.log(snagForm)
let displayHere = document.getElementById("searchResultsGoHere")
//console.log(displayHere)
let snagReset = snagForm.querySelector("#bye")
//console.log(snagReset)
// let test = document.querySelector("div#BT")
// let test2 = test.classList.add("hidden")
// //let test = displayHere.classList.add("hidden")


/**************
listen for book title/author name + 
use open library to return the correct information
***************/

function submitListner(bookData){
    snagForm.addEventListener("submit", e => {
        e.preventDefault();
       let textBoxValue = e.target.textBox.value
      //console.log(textBoxValue)
        fetch(`https://openlibrary.org/search.json?q=${textBoxValue}&fields=title,author_name&limit=9`, {
            method: "GET"
            })
        .then(res => res.json())
        .then(data => {
           //console.log(data)
           //console.log(data.docs)
            let docsArr = data.docs 
            //console.log(docsArr) 
            let bookArr = Object.entries(docsArr)
            
            bookArr.map((e) => {  
              let bookTitle = e[1]["title"] 
                //console.log(bookTitle)
                let authorName = e[1]["author_name"]
                let results = `Title: ${bookTitle}` + " " + `Author: ${authorName}`
                displayResults(results)
                moveBookToRN(bookTitle)// make extra function
                moveBookToRN(authorName)// make extra function
               //moveBookToRN(results)
            })
        })
    })
}

    submitListner()
 
/**************    
display results on the page w/ navigational buttons
***************/

function displayResults(bookInfo){
    //console.log(booksInfo) // provides the results from submitListner
    let para = document.createElement("p")
    para.setAttribute("class", "bookList")
    para.innerText = `${bookInfo}` 
    let readNextBtn = document.createElement("button")
    readNextBtn.setAttribute("class", "readBtn")
    readNextBtn.innerText = "Add to Read Next"
    readNextBtn.addEventListener("click", moveBookToRN)
    let wishListBtn = document.createElement("button")
    wishListBtn.setAttribute("class", "wishBtn")
    wishListBtn.innerText = "Add to Wish List"
    displayHere.appendChild(para).appendChild(readNextBtn)
    displayHere.appendChild(para).appendChild(wishListBtn)
    wishListBtn.addEventListener("click", moveBookToRN)
    snagForm.reset()
}


/************** 
clear all results when reset button is clicked
***************/

snagReset.addEventListener("click", e => {
    displayHere.remove(displayHere.p)
  }) 



/************** 
move the selected book to a table
***************/
function moveBookToRN(bookInfo){
    //console.log(bookInfo)
    console.log(titleInfo)
    console.log(authorInfo)
    //let test = bookInfo.slice(6, 24)
    //console.log(test)
    // let sliced = bookInfo.slice(6, 24)
    displayHere.addEventListener("click", e => {
      for(let h in bookInfo){
        let h = e.target.className
        if(h === "readBtn") {
            // let readNextTable = document.querySelector("#to-read")
            // let cell = readNextTable.appendChild(document.createElement("td")).innerText = `${bookInfo}` 

        }
    }
    })
}


    //     //console.log(e.target.parentNode) //gives me the p tag and all it's children/values
        
       
    //    // console.log(chosenBook.childNodes)// gives an array of [0]text, [1]button.readBtn, [2]button.wishBtn
    //     // let chosenBooksBtn = chosenBook.childNode
        
    //     if(chosenBook.hasChildNodes()){
    //         // console.log(chosenBook.chideNodes)
           
    //     }
        

       

         //console.log(snagP)
        //let snagP = document.querySelector("p")
        //  let readNextTable = document.querySelector("#to-read")
        //     let cell = document.createElement("td")
        //     cell.innerText = bookInfo
        //     let testNext = document.querySelector(".bookRN").appendChild(cell) 
        //     readNextTable.appendChild(testNext)
        
        //let wishListTable = document.querySelector("#wishList")
        
        
      //let testWish = document.querySelector(".bookWL").appendChild(cell) 
      
      //wishListTable.appendChild(testWish)
        





 //console.log(e.target) // gives me <button class="readBt"Add to Read Next</button>
//console.log(e.target.parentNode.value)//undefined. don't use this. 


  //console.log(chosenBook.firstChild) //first child is bookInfo string
         //console.log(chosenBook.lastChild) //wishBtn grabbed 
         //let grabWishBtn = chosenBook.lastChild
         //console.log(grabWishBtn.previousSibling)



























function submitListner(bookData){
    snagForm.addEventListener("submit", e => {
        e.preventDefault();
       let textBoxValue = e.target.textBox.value
      //console.log(textBoxValue)
        fetch(`https://openlibrary.org/search.json?q=${textBoxValue}&fields=title,author_name&limit=10`, {
            method: "GET"
            })
        .then(res => res.json())
        .then(data => {
           // console.log(data)
           //console.log(data.docs)
            let dataArr = Object.values(data);
           //console.log(dataArr) 
            let docsArr = dataArr[3]
            //console.log(docsArr) 
            
            docsArr.map((item, index) => {
                //console.log(item) //object
                let bookArr = Object.values(item)
                //console.log(bookArr)// array
                //console.log(bookArr[0]) //wuthering heights
                //console.log(bookArr[1]) //emily bronte
                let results = `Book: ${bookArr[0]}` + " " + `Author: ${bookArr[1]}`
                displayResults(results)
            }
            )}  
        )
        }
    )}



    function button(r){
        let btn = document.createElement("BUTTON")
        btn.setAttribute("id", "delete")
        btn.innerText = r
        document.body.appendChild(btn)
    }
    
  

    function createButtons (booksBtn) {
        let readNextBtn = document.createElement("button")
        readNextBtn.setAttribute("class", "readBtn")
        readNextBtn.innerText = "Add to Read Next"
        let wishListBtn = document.createElement("button")
        wishListBtn.setAttribute("class", "wishBtn")
        wishListBtn.innerText = "Add to Wish List"
        displayHere.appendChild(readNextBtn)
        displayHere.appendChild(wishListBtn)    
}

// function createButtons (booksBtn) {
//         //console.log(booksBtn) // all the book info
//         let snagP = document.querySelector("p")
//         let readNextBtn = document.createElement("button")
//         readNextBtn.setAttribute("class", "readBtn")
//         readNextBtn.innerText = "Add to Read Next"
//         let wishListBtn = document.createElement("button")
//         wishListBtn.setAttribute("class", "wishBtn")
//         wishListBtn.innerText = "Add to Wish List"

//         for(let i = 0; i< booksBtn.length; i++ ){
//             snagP.appendChild(readNextBtn)
//             snagP.appendChild(wishListBtn)
//         }

            
// }






document.addEventListener("DOMContentLoaded", ()=> {
    
})



/**************
listen for book title/author name + 
use open library to return the correct information
***************/

function submitListner(bookData){
snagForm.addEventListener("submit", e => {
    e.preventDefault();
   let textBoxValue = e.target.textBox.value
  //console.log(textBoxValue)
    fetch(`https://openlibrary.org/search.json?q=${textBoxValue}&fields=title,author_name&limit=10`, {
        method: "GET"
        })
    .then(res => res.json())
    .then(data => {
       // console.log(data)
       //console.log(data.docs)
        let docsArr = data.docs 
        //console.log(docsArr) 

        docsArr.map((item, index) => {
            //console.log(item) //object
            let bookArr = Object.values(item)
            //console.log(bookArr)// array
            //console.log(bookArr[0]) //wuthering heights
            //console.log(bookArr[1]) //emily bronte
            let results = `Book: ${bookArr[0]}` + " " + `Author: ${bookArr[1]}`
            displayResults(results)
            //moveBookToTable(results)
        }
        )}  
    )
    }
)}
    submitListner();
 
/**************    
display results on the page w/ navigational buttons
***************/

function displayResults(booksInfo){
    //console.log(booksInfo) // provides the results from submitListner
    let para = document.createElement("p")
    para.setAttribute("class", "bookList")
    para.innerText = `${booksInfo} ` 
    let readNextBtn = document.createElement("button")
    readNextBtn.setAttribute("class", "readBtn")
    readNextBtn.innerText = "Add to Read Next"
    readNextBtn.addEventListener("click", moveBookToTable)
    let wishListBtn = document.createElement("button")
    wishListBtn.setAttribute("class", "wishBtn")
    wishListBtn.innerText = "Add to Wish List"
    wishListBtn.addEventListener("click", moveBookToTable)
    displayHere.appendChild(para).appendChild(readNextBtn)
    displayHere.appendChild(para).appendChild(wishListBtn)
    snagForm.reset()
}


/************** 
clear all results when reset button is clicked
***************/

snagReset.addEventListener("click", e => {
    displayHere.remove(displayHere.p)
  }) 



/************** 
move the selected book to a table
***************/
// function moveBookToTable(){
//     displayHere.addEventListener("click", e => {
//         //console.log(e.target.parentNode) //gives me the p tag and all it's children/values
//         //let chosenBook = e.target.parentNode
//         //let snagP = document.querySelector("p")
//         //console.log(snagP)
//         //console.log(chosenBook.childNodes)// gives an array of [0]text, [1]button.readBtn, [2]button.wishBtn
//         // let chosenBooksBtn = chosenBook.childNode

       
//         //  let readNextTable = document.querySelector("#to-read")
//         //     let cell = document.createElement("td")
//         //     cell.innerText = bookInfo
//         //     let testNext = document.querySelector(".bookRN").appendChild(cell) 
//         //     readNextTable.appendChild(testNext)
        
//         //let wishListTable = document.querySelector("#wishList")
        
        
//       //let testWish = document.querySelector(".bookWL").appendChild(cell) 
      
//       //wishListTable.appendChild(testWish)
        
//     })}




 //console.log(e.target) // gives me <button class="readBt"Add to Read Next</button>
//console.log(e.target.parentNode.value)//undefined. don't use this. 


  //console.log(chosenBook.firstChild) //first child is bookInfo string
         //console.log(chosenBook.lastChild) //wishBtn grabbed 
         //let grabWishBtn = chosenBook.lastChild
         //console.log(grabWishBtn.previousSibling)







         function submitListner(bookData){
            snagForm.addEventListener("submit", e => {
                e.preventDefault();
               let textBoxValue = e.target.textBox.value
              //console.log(textBoxValue)
                fetch(`https://openlibrary.org/search.json?q=${textBoxValue}&fields=title,author_name&limit=10`, {
                    method: "GET"
                    })
                .then(res => res.json())
                .then(data => {
                   //console.log(data)
                   //console.log(data.docs)
                    let docsArr = data.docs 
                    //console.log(docsArr) 
                    
                    // let boo = document.createElement("div")
                    // boo.setAttribute("id", "Book")
                    // boo.innerText = "Book "
                    // let auth = document.createElement("div")
                    // auth.setAttribute("id", "Author")
                    // auth.innerText = "Author "
                    // let appendTitle = document.querySelector("#serachResultsGoHere").append(boo)
                    // let appendAuthor = document.querySelector("#serachResultsGoHere").append(auth)
            
                    docsArr.map((item, index) => {
                        //console.log(item) //object
                        let bookArr = Object.values(item)
                        console.log(bookArr)// array
                        console.log(bookArr[0]) //wuthering heights
                        console.log(bookArr[1]) //emily bronte
                        let results = `Title: ${bookArr[0]}` + " " + `Author: ${bookArr[1]}`
                        displayResults(results)
                        moveBookToTable(results)
                    }
                    )}  
                )
                }
            )}
             







            function submitListner(bookData){
                snagForm.addEventListener("submit", e => {
                    e.preventDefault();
                   let textBoxValue = e.target.textBox.value
                  //console.log(textBoxValue)
                    fetch(`http://openlibrary.org/search.json?author=${textBoxValue}&limit=10`, {
                        method: "GET"
                        })
                    .then(res => res.json())
                    .then(data => {
                       //console.log(data)
                       //console.log(data.docs)
                        let docsArr = data.docs 
                        //console.log(docsArr) 
                        let bookArr = Object.values(docsArr)
                        //console.log(bookArr)// array
                        
                        bookArr.map((item, index) => {
                            console.log(item) //object
                            console.log(index)
                            
                        
                            //let results = `Title: ${bookArr[0]}` + " " + `Author: ${bookArr[1]}`
                            //displayResults(results)
                            //moveBookToTable(results)
                        })
                    })
                })}
                //submitListner();