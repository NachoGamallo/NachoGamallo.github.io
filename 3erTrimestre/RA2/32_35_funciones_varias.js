//32
function doble(n) {
  return n*2;
}

console.log(doble(3));

//33
function esPrimo(n){
  if (n <= 1) return false;
  for (let i = 2; i < n; i++){
    if (n % i === 0) return false;
  }
  return true;
}

//34
const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaTriangulo(5,10));