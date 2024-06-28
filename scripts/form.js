document.getElementById('access-form').addEventListener('submit', function checkPassword(e) {

  e.preventDefault();

  if (document.getElementById('uwm-input')

  && document.getElementById('uwm-input').value == 'letmein') window.location.href = '/uwm/uwm.html';

  if (document.getElementById('citi-input')

  && document.getElementById('citi-input').value == 'letmein') window.location.href = '/citi/citi.html';

  if (document.getElementById('bcg-input')

  && document.getElementById('bcg-input').value == 'letmein') window.location.href = '/bcg/bcg.html';

  if (document.getElementById('cvs-input')

  && document.getElementById('cvs-input').value == 'letmein') window.location.href = '/cvs/cvs.html';

});


const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);

var input = document.getElementById('access-form');
input.focus();
input.select();
