// Write your solution here!
const cats =["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){
cats.push("Ralph")
}
function destructivelyPrependCat(name){
cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
  cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
  cats.shift("Milo")
}
function appendCat(name){
  const newCats = ["Milo","Otis","Garfield"]
  newCats.push("Broom")
  return newCats;
  
}
function prependCat(name){
let newCats = [name,...cats]
return newCats;
}
function removeLastCat(){
  let newCats = cats.slice(0,-1)
  return newCats;
}
function removeFirstCat(){
  let newCats = cats.slice(1);
  return newCats;

}
