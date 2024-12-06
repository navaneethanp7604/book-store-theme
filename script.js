var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbtn=document.getElementById("add-popup-btn")

addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="inline-block"
    popupbox.style.display="inline-block"
})

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var booktittleinput=document.getElementById("book-tittle-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
var addbook=document.getElementById("add-book")
 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktittleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="erase(event)" id="vanish">DELETE</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })
  
 var vanish=document.getElementById("")
  function erase(event){
    event.target.parentElement.remove()
  }

 
 