module.exports = function reverse (n) {
  let stringNumb = n.toString();
  let result = '';

  if (stringNumb[0] === '-'){
      stringNumb = stringNumb.slice(1);
  }

  for (let i = 0; i < stringNumb.length; i++) {

      result = stringNumb[i] + result;
  }

  return Number(result);
}

