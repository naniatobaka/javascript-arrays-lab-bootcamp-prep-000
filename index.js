// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten( ){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  let newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten (name){
  let newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten (){
  let newKittens = kittens.slice
}


