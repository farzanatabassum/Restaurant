console.log('Hello')

function createModal() {

    let modalBackground = document.createElement("div")
    modalBackground.className="modal"

    let modalContent = document.createElement("div")
    modalContent.className="modal-content"

    let close = document.createElement("span")
    close.className="close"
    close.innerText ="X"

    let title = document.createElement("h1")
    title.className="titleModal"

    let body = document.getElementsByClassName("body")[0]

    modalContent.appendChild(title)
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
    let modal = document.getElementsByClassName("modal")[0]
    let close = document.getElementsByClassName("close")[0]
  let cardTitle = nodeElement.target.getElementsByClassName("food-title")[0]
    console.log("🚀 ~ file: foodMenu.js:44 ~ handleModal ~ cardTitle", cardTitle)
    
        modal.style.display = "block"
        modalTitle.innerText = cardTitle.innerText
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
