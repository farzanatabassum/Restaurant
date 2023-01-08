console.log('Hello')

function createModal() {

    let modalBackground = document.createElement("div")
    modalBackground.className="modal"

    let modalContent = document.createElement("div")
    modalContent.className="modal-content"

    let close = document.createElement("span")
    close.className="close"
    close.innerText ="X"

    let body = document.getElementsByClassName("body")[0]

    modalContent.appendChild(close)
    modalBackground.appendChild(modalContent)
    body.appendChild(modalBackground)

}

function init(){

createModal()
handleModal()
}

init()

function handleModal(){

    let title = document.getElementsByClassName("title")[0]
    let modal = document.getElementsByClassName("modal")[0]
    let close = document.getElementsByClassName("close")[0]
    title.addEventListener("click",()=>{
        console.log('click')
        modal.style.display = "block"
        console.log("🚀 ~ file: foodMenu.js:38 ~ title.addEventListener ~ modal", modal)
    })

    close.addEventListener("click",()=>{
      
        modal.style.display = "none"
      
    })

   modal.addEventListener("click",()=>{
modal.style.display = "none"
   })


}

