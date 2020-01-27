// обращаемся к полю input
document.querySelector('#elastic').oninput = function() {
  //Считывание данных и обрезание пробелов
  logic(this.value.toLowerCase().trim());
}

function logic(uf) {
  // получение всех элементов где храняться данные
  uf = uf.toLowerCase();
  let elasticItems = document.querySelectorAll('.elastic li');
  if (uf != '') {
    elasticItems.forEach(function (elem) {
      if (elem.innerText.toLowerCase().search(uf) == -1) {
          elem.classList.add('hide');
          elem.innerHTML = elem.innerText;
      }
      else {
          remove(elem);
          elem.innerText.toLowerCase();
          let str = elem.innerText;
          elem.innerHTML = insertMark(str, elem.innerText.toLowerCase().search(uf), uf.length);
      }
    });
  }
  else {
    elasticItems.forEach(function (elem) {
      remove(elem);
      elem.innerText.toLowerCase();
      elem.innerHTML = elem.innerText;
    });
  }
}

function remove(elem) {
  elem.classList.remove('hide');
}

function insertMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos + len);
}
