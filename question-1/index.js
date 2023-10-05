const mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];

function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new Error('Info Missing'));
      return;
    }
    const filteredWords = arr
      .filter(item => typeof item === 'string')
      .map(word => word.toLowerCase());

    if (filteredWords.length === 0) {
      reject(new Error('String missing'));
    } else {
      resolve(filteredWords);
    }
    
  });

}

lowerCaseWords(mixedArray)
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.error(error.message);
  });
