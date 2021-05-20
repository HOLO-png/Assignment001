var inputNum = document.querySelectorAll('input');
var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var numMet;
var numCanNang;
inputNum[0].onchange = function (e) {
  var numCm = e.target.value;
  numMet = numCm / 100;
};
console.log(numMet);
console.log(numCanNang);

inputNum[1].onchange = function (e) {
  numCanNang = e.target.value;
};

btn.onclick = function () {
  var BMI = numCanNang / (numMet * 2);
  console.log(numMet);
  console.log(numCanNang);
  console.log(BMI);
  if (BMI < 18.5) {
    console.log('Gay' + 'Nguy co phat trien benh Thap');
    h1.innerHTML = 'Gay' + 'Nguy co phat trien benh Thap';
  } else if (BMI < 24.9) {
    console.log('Binh thuong' + 'Nguy co phat trien benh Trung Binh');
    h1.innerHTML = 'Binh thuong' + 'Nguy co phat trien benh Trung Binh';
  } else if (BMI < 29.9) {
    console.log('Hoi Beo' + 'Nguy co phat trien benh Cao');
    h1.innerHTML = 'Binh thuong' + 'Nguy co phat trien benh Trung Binh';
  } else if (BMI < 34.9) {
    console.log('beo phi cap do 1' + 'Nguy co phat trien benh Cao');
    h1.innerHTML = 'Binh thuong' + 'Nguy co phat trien benh Trung Binh';
  } else if (BMI < 39.9) {
    console.log('beo phi cap do 2' + 'Nguy co phat trien benh rat Cao');
    h1.innerHTML = 'Binh thuong' + 'Nguy co phat trien benh Trung Binh';
  } else if (BMI > 40) {
    console.log('beo phi cap do 3' + 'Nguy co phat trien benh nguy hiem');
    h1.innerHTML = 'Binh thuong' + 'Nguy co phat trien benh Trung Binh';
  }
};
