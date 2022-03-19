var nilai = 0;
var btnkurang = document.getElementById("kurang");
var btntambah = document.getElementById("tambah");

cont.innerHTML = `<h3>${nilai}</h3>`;
btnkurang.onclick = function () {
  nilai--;
  cont.innerHTML = `<h3>${nilai}</h3>`;
};
btntambah.onclick = function () {
  nilai++;
  cont.innerHTML = `<h3>${nilai}</h3>`;
};
