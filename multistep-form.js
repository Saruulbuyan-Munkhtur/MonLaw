// --- Button slide---
const nextBtn = document.getElementsByClassName('next');
const pages = document.getElementsByClassName('pages');

nextBtn[0].addEventListener('click', function(){
   pages[0].style.display = 'none';
   document.getElementById('step2').classList.add('active');
});
nextBtn[1].addEventListener('click', function(){
   pages[1].style.display = 'none';
   document.getElementById('step3').classList.add('active');
});




const prevBtn =  document.getElementsByClassName('prev');

prevBtn[0].addEventListener('click', function(){
   pages[0].style.display = 'block';
   document.getElementById('step2').classList.remove('active');
});

prevBtn[1].addEventListener('click', function(){
   pages[1].style.display = 'block';
   document.getElementById('step3').classList.remove('active');
});



// --- Step1 form validation ---

