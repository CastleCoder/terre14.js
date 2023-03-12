const args = process.argv.slice(2);

function suisse(a,b,c){
  
  
  if(isNaN(a) || isNaN(b) || isNaN(c) || args.length !==3){
    console.log("Erreur !");
  } else {
    if (a === b || b === c || a === c){
      console.log("Erreur !");
    } else {
      // const numbersArray = [a,b,c];
      const numbersArray = [a,b,c];
      numbersArray.sort((a,b)=> a-b);
      console.log(numbersArray);

      const max = Math.max(...numbersArray);
      console.log(max);
      const min = Math.min(...numbersArray);
      console.log(min);

      const filteredArray = numbersArray.filter(num => num < max && num > min);
      
      console.log(filteredArray.join());
    }
  }
}

suisse(args[0], args[1], args[2]);