/*
// exercise 1
const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

/*for (let i = 0 ; i<greekGods.length; i++){
 console.log(i+1 +". " + greekGods[i])
}*/
/*
greekGods.forEach((god , index) => {
  if (index === 1){
  setTimeout(function(){console.log(index+1 +". " + god)},2)
 }else{
  console.log(index+1 +". " + god)
 }
})
*/
function mainFunction(callback) {
  console.log("Starting!");
  setTimeout(function () {
    callback();
  }, 1000);
  console.log("Continuing!");
}
function myCallbackFunction() {
  console.log("Finished!");
}
mainFunction(myCallbackFunction);