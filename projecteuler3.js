//problem 3 project euler
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var number = 600851475143;
var arrayFactorPrimes = [];

//Loop to go through numbers lower that var number
for (var j = 2; j<number; j+=1){

  //define if j is prime. If it isn't break the for loop to stop computing
  var isP = true;
  for(k=2; k<j; k++){
    if(j%k==0){
      isP = false;
      break;
    }
  }

  //Evaluate if the number is prime and a Factor. If it is, add to the array
  if ((isP==true)&&((number%j)==0)){
    arrayFactorPrimes.push(j);

    //Define the multiplication of the prime factors stored so that we can stop the loop once it's passed.
    //Else it will keep runing and be a problem for larger numbers
    //Do it inside the prime and factor evaluation so that it doesn't run when j isn't a prime
    var multiplication = 1;
    arrayFactorPrimes.forEach(function(el){
      multiplication *= el;
    });

    if (multiplication>=number){
      console.log("multiplication = "+multiplication);
      break; //Break the for loop if number is passed
    }
  }

}
//all the prime factors
console.log("array primes = "+arrayFactorPrimes);
//last element
console.log(arrayFactorPrimes[arrayFactorPrimes.length-1])
