console.log('Hello')

function createModal() {

    let modalBackground = document.createElement("div")
    modalBackground.className="modal"

    let modalContent = document.createElement("div")
    modalContent.className="modal-content"

    let heading = document.createElement("div")
heading.className="modal-heading"
    let close = document.createElement("span")
    close.className="close"
    close.innerText ="X"

    let title = document.createElement("h1")
    title.className="titleModal"

    let body = document.getElementsByClassName("body")[0]
let content = document.createElement("p")
content.className = "detailsModal"

let price = document.createElement("h1")
    // let content = document.getElementsByClassName("food-details")[0]
price.className = "priceModal"

let image = document.createElement("img")
image.className = "imageModal"
// content.innerText = nodeElement.target.getElementsByClassName("food-details")[0]
    // modalContent.appendChild(content)
heading.appendChild(title)
heading.appendChild(price)

    modalContent.appendChild(heading)
    modalContent.appendChild(image)

    modalContent.appendChild(content)
    modalContent.appendChild(close)
    modalBackground.appendChild(modalContent)
    body.appendChild(modalBackground)


}

function init(){

createModal()

test()
}

init()

function handleModal(nodeElement){
console.log("🚀 ~ file: foodMenu.js:38 ~ handleModal ~ nodeElement", nodeElement.target)

    let modalTitle = document.getElementsByClassName("titleModal")[0]
    let content = document.getElementsByClassName("detailsModal")[0]
    let price = document.getElementsByClassName("priceModal")[0]
    let image = document.getElementsByClassName("imageModal")[0]
    console.log("🚀 ~ file: foodMenu.js:48 ~ handleModal ~ content", content)
    let modal = document.getElementsByClassName("modal")[0]
    let close = document.getElementsByClassName("close")[0]
let cardDetails = nodeElement.target.getElementsByClassName("food-details")[0]
  console.log("🚀 ~ file: foodMenu.js:52 ~ handleModal ~ cardDetails", cardDetails)
  let cardTitle = nodeElement.target.getElementsByClassName("food-title")[0]
    console.log("🚀 ~ file: foodMenu.js:44 ~ handleModal ~ cardTitle", cardTitle)

    let priceTag = nodeElement.target.getElementsByClassName("food-price")[0]

    let imageView = nodeElement.target.getElementsByTagName("img")[0]
    console.log("🚀 ~ file: foodMenu.js:68 ~ handleModal ~ imageView", imageView)
    
        modal.style.display = "block"
        modalTitle.innerText = cardTitle.innerText
        content.innerText = cardDetails.innerText
        price.innerText = priceTag.innerText
        image.src = imageView.src
        console.log("🚀 ~ file: foodMenu.js:38 ~ title.addEventListener ~ modal", modal)
    
    close.addEventListener("click",()=>{
      
        modal.style.display = "none"
      
    })

   modal.addEventListener("click",()=>{
modal.style.display = "none"
   })


   
}

function test() {


let food = document.getElementsByClassName("food-card")
console.log("🚀 ~ file: foodMenu.js:60 ~ test ~ food", food)

for(let i =0 ; i<food.length; i++){

    food[i].addEventListener('click', handleModal)
}


    




    
}
