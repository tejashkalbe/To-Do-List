const form = document.getElementById('form');
const btn = document.getElementById('addL');
const remove = document.getElementById('addhere');

console.log(btn)



const addToList = (e) => {
  e.preventDefault();
  const Litem = document.getElementById('Add').value;
  console.log(Litem);
  document.getElementById('addhere').innerHTML += `<li>${Litem}</li>`
}

const remove1 = (e) => {
  e.preventDefault();
  const rev = e.target;
  rev.parentNode.removeChild(rev);
}



btn.addEventListener("click",addToList)
remove.addEventListener('click',remove1)







