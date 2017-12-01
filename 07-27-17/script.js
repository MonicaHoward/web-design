var hamburger1 = document.querySelector('.hamburger-1');
var hamburger2 = document.querySelector('.hamburger-2');
var hamburger3 = document.querySelector('.hamburger-3');

document.addEventListener('click', function() {
  hamburger1.classList.toggle('change1');
});
document.addEventListener('click', function() {
  hamburger2.classList.toggle('change2');
});
document.addEventListener('click', function() {
  hamburger3.classList.toggle('change3')
});
