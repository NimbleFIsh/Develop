let array = document.getElementsByClassName('slide_content'), t = 80, n = 0, f = 0, s = 80, l = 0, k = 0,
i = 0, z, y, h = 0, zi, next = document.getElementsByClassName('next')[0], back = document.getElementsByClassName('back')[0];

for (i = 0; i < array.length; i++) {
  array[i].style.right = "0";
}

next.addEventListener('click', changeSlideR, false);
back.addEventListener('click', changeSlideL, false);

function changeSlideR() {
  setTimeout(antibug, 0);
  setTimeout(bug, 1800);

  if (parseInt(array[0].style.right) < 320) {
    for (i = 0; i < array.length; i++) {
      z = array[i].style.right = (t + "vw");
      h = parseInt(array[i].style.right);
      console.log(z);
    }
    t = h + s;
    h = 0
  }
}

function changeSlideL() {
  setTimeout(antibug, 0);
  setTimeout(bug, 1800);

  for (i = 0; i < array.length; i++) {
     z = array[i].style.right;
     k = parseInt(z);
     if (k > 0) {
       l = k - 80 + "vw";
       zi = array[i].style.right = (l);
       console.log(zi);
     }
     if (k == 0) {
       console.log("k = 0")
    }
  }
}

function bug() {
  next.addEventListener('click', changeSlideR, false);
  back.addEventListener('click', changeSlideL, false);
}

function antibug() {
  next.removeEventListener('click', changeSlideR, false);
  back.removeEventListener('click', changeSlideL, false);
}
