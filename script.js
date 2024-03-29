let addList = document.querySelector(".active");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".menuIcon");
const div = document.createElement("div");
div.classList.add("side-bar-hidden");

document.addEventListener("click", function(event){
  if(event.target == addList){
    addList.placeholder = "";
  }else if(event.target.tagName != "INPUT"){
    addList.placeholder = "+ Add a new list";
  }

  if(event.target == add){
    let item = addList.value;
    if(item != ""){
      let li = document.createElement("li");
      li.innerHTML = item;
      tasks.appendChild(li);
      addList.value = "";
    }
  }

  if(event.target == menu || event.target == menuIcon){
    div.classList.add("side-bar");
    div.classList.toggle("side-bar-hidden");
    div.innerHTML = "Thank you for vising my site";
    document.body.appendChild(div);
  }else{
    div.classList.add("side-bar-hidden");
  }
});