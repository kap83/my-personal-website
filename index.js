//document.addEventListener("DOMContentLoaded", init)



function submitListner(bookData){
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
   let textBoxValue = e.target.textBox.value
  //console.log(textBoxValue)
    fetch(`https://openlibrary.org/search.json?q=${textBoxValue}&fields=title,author_name&limit=10`, {
        method: "GET"
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let dataArr = Object.values(data);
        console.log(dataArr)
        let resultValues = dataArr[3][0]//b/c i have 0, i only get the first option
       console.log(resultValues)
       for(let e in resultValues){
        //console.log(e)
        if(e === "title" || "author_name"){
           let result = resultValues[e]
           console.log(result)
        } 
        }
       }
    //    let test = Object.values(resultValues)
    //    console.log(test)
        


      
    //    //searchResults(resultValues)
    );
    }
)}

    submitListner();

// function searchResults(book){
//     let para = document.createElement("p")
//     for(let obj of book){
//         console.log(obj) //undefined
//         console.log(book)
//         let titleMatch = obj.title
//         let authorMatch = obj.author_name
//         //console.log(titleMatch || authorMatch)
//         }


    // book.forEach(e => {
    //  console.log(e.title)
     
    // });
//}




           //the below works
        // let targeting = data.docs[0]
        // let found = targeting.title
        // 
        // para.innerText = found
        // document.getElementById("searchResults").appendChild(para)


//maybe something like if(title/author === textBoxValue return that info) put this in the getAPI function
