
document.addEventListener('DOMContentLoaded', ()=> {
  var list = document.getElementsByClassName("lücke");


  for (let item of list) {
    console.log(item);
    item.innerHTML = '<div onkeydown="search(this)"><input></input><div style="display:none">'+item.innerText+'</div></div>';
}
}, false);

function search(item) {
    if(event.key === 'Enter') {
        let solution = item.lastElementChild.innerText.toLowerCase();
        if(item.firstElementChild.value.toLowerCase() == solution) {

          const newContent = document.createTextNode(solution);
          item.parentNode.appendChild(newContent);
          item.parentNode.classList.add("richtig");
          item.parentNode.removeChild(item);
        }else{
                    const newContent = document.createTextNode(solution);
                    item.parentNode.appendChild(newContent);
                    item.parentNode.classList.add("falsch");
                    item.parentNode.title = item.firstElementChild.value;
                    item.parentNode.removeChild(item);
        }
    }
}
