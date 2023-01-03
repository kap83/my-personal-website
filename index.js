//document.addEventListener("DOMContentLoaded", init)

let snagForm = document.querySelector("form")

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
        let dataArr = Object.values(data);
        //console.log(dataArr) 
        let docsArr = dataArr[3]
   
        docsArr.map((item, index) => {
            //console.log(item) //object
             // console.log(bookArr[0]) //wuthering heights
            // console.log(bookArr[1]) //emily bronte
            let bookArr = Object.values(item)
            //console.log(bookArr)// array
            let results = `Book: ${bookArr[0]}` + " " + `Author: ${bookArr[1]}`
            displayResults(results)
        }
        )}  
    )
    }
)}
    submitListner();

// let displayHere = document.getElementById("searchResultsGoHere")
// //console.log(displayHere)

function displayResults(booksInfo){
    //console.log(booksInfo) // provides the results from submitListner
    let para = document.createElement("p")
    para.innerText = booksInfo
    let btn = document.createElement("button")
    btn.setAttribute("id", "delete")
    btn.innerText = "delete"
    let displayHere = document.getElementById("searchResultsGoHere").appendChild(para).appendChild(btn)
    snagForm.reset()
    console.log(displayHere) //displayHere gets <button id="delete">delete</button>
    displayHere.addEventListener("click", e => {
    console.log(e) // e gets the pointer event
    removeTitle(e)
    })
}

function removeTitle(b){
    console.log(b) //why is b undefined? 
  //return b.remove()
}


removeTitle()



           //the below works
        // let targeting = data.docs[0]
        // let found = targeting.title
        // 
        // para.innerText = found
        // 



                        // for(let gettingThere in oneMore){
                //     //console.log(gettingThere, oneMore[gettingThere])
                //     let hmm = oneMore[gettingThere]["title"]
                //     console.log(hmm)
                    
                // }
       


        // let test = docsArr.map(function(item, index, array){
        //     console.log(item)//docs
        //     console.log(index)//0
        //     console.log(array)// 
        // }


//maybe something like if(title/author === textBoxValue return that info) put this in the getAPI function


// come back to this:  let result = `Book: ${bookArr[0]}` + " " + `Author: ${authorArr[0]}` + " " + `Author: ${authorArr[1]}`

 //let book = bookArr[0]
            //let author = bookArr[1]
            //let authorArr = Object.values(bookArr[1])
            // console.log(authorArr[0])
            // console.log(authorArr[1])