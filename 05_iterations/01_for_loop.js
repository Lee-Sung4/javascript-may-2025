// for

for (let score = 0; score <= 10; score++) {
  const element = score;
  if (element === 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}


for (let score = 0; score <= 10; score++) {
  console.log(`Outter loop value: ${score}`);
  for (let record = 0; record <= 10; record++) {
    // console.log(`Inner loop value: ${record} and outter loop value: ${score}`);
    // console.log(score + "*" + record + "=" + score * record);
    console.log(`${score} * ${record} = ${score * record}`);
  }
}


const myArray = ["pyro", "cryo", "hydro", "dendro", "electro", "anemo", "geo"];
console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}


//  break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected number ${index}`);
        break
    }
    console.log(index);
    
    
}



for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected  number: ${index}`);
        continue
    }
    console.log(index);
    
    
}


for (index = 0; index <= 100; index += 5){
console.log(index);

}


const Array = ['english', 'spanish', 'korean', 'karbi', 'japanese']

for (index = 0; index < Array.length; index++){
    console.log(Array[index]);
    
}
