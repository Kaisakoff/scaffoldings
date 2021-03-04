import '../styles/home.scss';

const operationSystem = document.querySelector('.operation-system');
const browser = document.querySelector('.browser');

const str = navigator.userAgent;
const arr = str.split(' ');

let firstElementArr;
let lastElementArr;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].match(/\(/)) {
    firstElementArr = i;
    continue;
  }

  if (arr[i].match(/\)/)) {
    lastElementArr = i + 1;
    break;
  }
}

const compSoft = arr.slice(firstElementArr, lastElementArr).join(' ');
operationSystem.append(compSoft);


for (let i = 0; i < arr.length; i++) {
  const opera = /OPR/i;
  const firefox = /Firefox/i;
  const chrom = /Chrome/i;
  const safari = /Safari/i;
  const edg = /Edg/i;

  const operaCheck = str.match(opera);
  const safariCheck = str.match(chrom);

  if (arr[i].match(opera)) {
    browser.append(arr[i]);
  } else if (arr[i].match(firefox)) {
    browser.append(arr[i]);
  } else if (arr[i].match(chrom) && !operaCheck) {
    browser.append(arr[i]);
  } else if (arr[i].match(safari) && !safariCheck) {
    browser.append(arr[i]);
  } else if (arr[i].match(edg)) {
    browser.append(arr[i]);
  }
}
