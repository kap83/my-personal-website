//document.addEventListener("DOMContentLoaded", init)

function submitListner(bookData){
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
   let textBoxValue = e.target.textBox.value
   //console.log(textBoxValue)
    //return textBoxValue //how to connect this to the search
    fetch(`https://openlibrary.org/search.json?q=${textBoxValue}`, {
        method: "GET"
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //the below works
        let targeting = data.docs[0]
        let found = targeting.title
        let para = document.createElement("p")
        para.innerText = found
        document.getElementById("searchResults").appendChild(para)
    }
    )
    }
)}

    submitListner()




//maybe something like if(title/author === textBoxValue return that info) put this in the getAPI function
