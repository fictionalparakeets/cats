// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) printOutCatBreed(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');

const printOutCatBreed = ((breedInput) => console.log('Return Value: ', breedInput));

// breedDetailsFromFile('Bombay', printOutCatBreed);


breedDetailsFromFile('Bombay', printOutCatBreed);

// console.log(bombay); // => will NOT print out details, instead we will see undefined!

