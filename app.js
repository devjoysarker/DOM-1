
// // console.log(document.links);

// // document.title ='OP-DOM' ;


// const h1   = document.getElementById('love');
// const para = document.getElementsByClassName('joy');
const tagg = document.getElementsByTagName('a');


// // console.log(h1);


// // h1.innerHTML = 'Your MERN stack developer'


// // h1.innerText = 'You love js';


// console.log(para[0]);

// para[0].innerText = 'you love everything'
// para[1].innerHTML = 'Yes i am achive my goal.'


// console.log(tagg);

// tagg[0].innerText = 'read more'
// tagg[1].innerText = 'read less'


const padd = document.querySelectorAll('.joy');
console.log(padd);

padd[0].innerHTML = 'javascrit is good for me';
padd[1].innerText = 'Flower is nice is create beautiful natuare';

const bann = document.querySelector('.banner-section');

console.log(bann);

bann.innerHTML= `

<h2>We are MERN stack developer</h2>
`;


const box    = document.querySelector('.box h2');
const boxp   = document.querySelector('.box p');

box.style.color            = '#fff' ;
box.style.backgroundColor  = 'orange';
box.style.padding          ='10px';
box.style.textAlign        ='center';
console.log(box.style);
boxp.innerText             = 'amir sobi javascript shikbo' ;



console.log(box.hasAttribute('name'));
box.setAttribute('style', 'color:red;');
box.setAttribute('height', '300');

 if(box.hasAttribute('age')){
     console.log('Yes');
 }else{
     console.log('NO');
 }


 box.className = 'box2';

box.classList.add('box3');
box.classList.add ('box4');
box.classList.remove('box2'); 



























