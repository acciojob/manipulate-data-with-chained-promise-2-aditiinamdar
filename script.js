// your JS code here
const outputDiv = document.getElementById("output");

function returnArray() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

returnArray()
  .then(function (arr) {
    const evens = arr.filter((nums) => nums % 2 === 0);

    return new Promise(function (resolve) {
      setTimeout(() => {
        outputDiv.textContent = evens;
        resolve(evens);
      }, 1000);
    });
  })
  .then(function (evens) {
    const multiplied = evens.map((num) => num * 2);

    return new Promise(function (resolve) {
      setTimeout(() => {
        outputDiv.textContent = multiplied;
        resolve(multiplied);
      }, 2000);
    });
  });
