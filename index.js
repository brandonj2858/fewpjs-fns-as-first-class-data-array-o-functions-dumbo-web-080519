

var wakeDog = function(dogName, dogBreed) {
  //console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName, dogBreed) {
  //console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName, dogBreed) {
  //console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed) {
  const value = routine.forEach(dogThing => dogThing(dogName, dogBreed));
  console.log(value);
  return value;
}
