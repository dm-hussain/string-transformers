let userInput = document.querySelector('input');

let userText = userInput.value;

userInput.addEventListener('input', (e) => {
  userText = e.target.value;

  transformLower();
  transformUpper();
  transformCamel();
  transformPascal();
  transformSnake();
  transformKebab();
  transformTrim();
});

transformLower();

function transformLower() {
  let lowerSpan = document.querySelector('.lower-case span');

  lowerSpan.innerText = userText.toLowerCase();
}

transformUpper();

function transformUpper() {
  let lowerSpan = document.querySelector('.upper-case span');

  lowerSpan.innerText = userText.toUpperCase();
}

transformCamel();

function transformCamel() {
  let lowerSpan = document.querySelector('.camel-case span');

  let strArr = userText.split(/[\s,;]+/);

  let newArr = strArr.map((word, i) => {
    if (i === 0) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });

  let opString = newArr.join('');
  lowerSpan.innerText = opString;
}

transformPascal();

function transformPascal() {
  let lowerSpan = document.querySelector('.pascal-case span');

  let strArr = userText.split(/[\s,;]+/);
  // console.log(strArr);

  let newArr = strArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  let opString = newArr.join('');
  lowerSpan.innerText = opString;
}

transformSnake();

function transformSnake() {
  let lowerSpan = document.querySelector('.snake-case span');

  lowerSpan.innerText = userText.toLowerCase().replaceAll(' ', '_');
}

transformKebab();

function transformKebab() {
  let lowerSpan = document.querySelector('.kebab-case span');

  lowerSpan.innerText = userText.toLowerCase().replaceAll(' ', '-');
}

transformTrim();

function transformTrim() {
  let lowerSpan = document.querySelector('.trim-case span');

  lowerSpan.innerText = userText.replaceAll(' ', '');
}
