// UDAH MAKSIMAL TPI GATAU BENER APA GA JWB NYA

// NO 1 BASIC HURUF

function loncatan(genap) {
    if (typeof genap === "string"){
    for (i = 1 ; i <= genap.length ; i +=2){
         console.log(genap[i])
     }
    } else{
        alert('mungkin yang anda masukan angka')
    }
}
console.log(loncatan(12344))

// NO 2 BASIC KARAKTER HURUF

function countJumlah(param) {
  if(typeof param !== 'string') return ('Error, Sorry...')

  let spa = 0;
  for(i = 0; i <= param.length ; i++){
    spa[i] === " " ? space += 1 : "";
  }

  return param.length ? spa + 1 : 0;
}

console.log(countJumlah('ganda'))

// NO 3 BASIC VOKAL
function hurufVokal(huruf) {
    if(typeof huruf !== 'string') return ('Soryy, Harus string..');
    
      let hurufNada = 0;
      let hurufMati = 0;

    for(i = 0; i < huruf.length; i++){
      switch(huruf[i]){
        case "a":
        case "i":
        case "u":
        case "e":
        case "o":
          hurufNada +=1;
     break;
        default:
        hurufMati +=1;
      }
    }
    return `Huruf Vokal : ${hurufNada}, Huruf Mati : ${hurufMati}` ;
}
console.log(hurufVokal('ganda'))

// NO 4 BASIC REVERSED
function kalimatReverse(inputan) {
  let penyimpanan = "";

  for(i = inputan.length -1; i >= 0 ; i--){
  penyimpanan += inputan[i];
  }
  return penyimpanan
}

console.log(kalimatReverse('ganda'))

// #  NO 5 BASIC PALIDROM
function inputanRe(word) {
  let penyimpanan = "";
  for (i= word.length -1 ; i >= 0; i--){
    penyimpanan += word[i];
  }

  if( word.length === 1){
  return false;
 } else if ( word == penyimpanan){
  return true;
} else {
    return false
  }
}
console.log(inputanRe('gggg'))

// # NO 6 BASIC KEMBALIAN

function tukerUang(uang) {
  if(typeof uang !== 'number') return ('Sorry harus Number')

  let kembalian = "";
  while (uang > 0){
    if( uang - 1000 >= 0){
      kembalian += '1000,';
      uang -= '1000';
    } 
    else if (uang - 500 >= 0){
      kembalian += '500,';
      uang -= '500';
    } 
    else if (uang - 200 >= 0){
      kembalian += '200,';
      uang -= '200';
    }
     else if (uang - 100 >= 0){
      kembalian += '100,';
      uang -= '100';
    }
    else if (uang - 50 >= 0 ){
      kembalian += '50,';
      uang -= '50';
    }
    else if (uang - 20 >= 0){
      kembalian += '20,';
      uang -= '20';
    }
    else if (uang - 10 >= 0){
      kembalian += '10,'
      uang -= '10';
    }
    else if (uang - 5 >= 0){
      kembalian += '5,';
      uang -= '5';
    }
    else if (uang - 1 >= 0){
      kembalian += '1,';
      uang -= '1';
    }
    
  }
     return kembalian;
}

console.log ('amjir receh ' + tukerUang(1750))

// NO 7 BASIC BINTANG

function bintangStar(segetiga){
  let bentuk =""
  for (let i = 0; i < segetiga ; i++){
    for( let n = 0; n <= i ; n++){
        bentuk += "*"
    }
    bentuk += "\n";
  }
  return bentuk;
}

console.log(bintangStar(8))

// NO 8 BASIC BINTANG TENGAH

function piramid (bin) {
  var retur = ""


  for (let i = 1; i <= bin; i++) {
    for (let a = 1; a <= bin - i; a++) {
      retur += " ";
    }for (let e = 1; e < 2 * i; e++) {
      retur += "*";
    }
    retur += "\n";
  }
  return retur;
}

console.log(piramid(4))





