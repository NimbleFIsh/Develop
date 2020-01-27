document.querySelector('.burger').addEventListener('click', function (e) {
  e.preventDefault();
  // this.classList.toggle('active');
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    document.querySelector('#menu').classList.remove('nav_active');
    document.body.classList.remove('body_active');
  }
  else {
    this.classList.add('active');
    document.querySelector('#menu').classList.add('nav_active');
    document.body.classList.add('body_active');
  }
});
