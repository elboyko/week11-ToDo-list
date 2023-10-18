
const btn = document.getElementById('btnIn');
const item = document.getElementById('item');

btn.addEventListener('click', addList)
function addList() {

   let valueIn = document.getElementById('inputIn');
   let valueGet = valueIn.value;
   let newLi = document.createElement('li');
   newLi.classList.add('li');
   newLi.textContent = valueGet;
   item.append(newLi);
   valueIn.value = "";
   newLi.addEventListener('click', function (evt) {

      if (evt.target.tagName === 'LI') {
         evt.target.classList.toggle('textDecor');

      }
      // newLi.style.textDecoration = "line-through"
      // newLi.classList.add('textDecor');
   })
}