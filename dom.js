//Single element selcetor
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));


//Multiple Selector
const items=document.querySelectorAll('.item');

//Use queryselectorAll always its good u can use class, id & tag name
 items.forEach((item)=> console.log(item));

 const ul= document.querySelector('.items');

 //ul.remove();
 //ul.lastElementChild.remove();
 /*ul.firstElementChild.textContent='hello';
 ul.children[1].innerHTML='<h1>Hello</h1>';

 const btn=document.querySelector('.btn');
 
 btn.addEventListener('click', (e)=>{
    e.preventDefault(); // to observe the below console output
    console.log('click');
    console.log(e.target);
    console.log(e.target.className);
    document.querySelector('#my-form').style.background='aqua';
    document.querySelector('body').classList.add('bg-dark');

 });*/

 const myForm=document.querySelector('#my-form');
 const nameinput=document.querySelector('#name');
 const email=document.querySelector('#email');
 const msg=document.querySelector('.msg');
 const userlist=document.querySelector('#users');

 myForm.addEventListener('submit',onSubmit);

 function onSubmit(e){
     e.preventDefault();
     /*if(nameinput.value===''|| email.value===''){
         alert('Please enter valid input');
     }else{
         console.log('success');
     }*/

     if(nameinput.value===''||email.value===''){
         msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
     }else{
         const li=document.createElement('li');
         li.appendChild(document.createTextNode(`${nameinput.value} : ${email.value}`));

         userlist.appendChild(li);

         //clear fields
         nameinput.value='';
         email.value='';

         // We can send these in database using backend by fetch api or AJAX
    }
 }
