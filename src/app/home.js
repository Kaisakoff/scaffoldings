import '../styles/home.scss';

let operationSystem = document.querySelector('.operation-system');
let browser = document.querySelector('.browser');


let str = navigator.userAgent;
let arr = str.split(' ');

let firstElementArr;
let lastElementArr;
for (let i = 0; i < arr.length; i++) {

    if (arr[i].match(/\(/)) {
        firstElementArr = i;
        continue
    }

    if (arr[i].match(/\)/)) {
        lastElementArr = i + 1;
        break
    }
}

let compSoft = arr.slice(firstElementArr, lastElementArr).join(' ');
operationSystem.append(compSoft);


for (let i =0; i < arr.length; i++){
    let opera = /OPR/i;
    let firefox = /Firefox/i;
    let chrom = /Chrome/i;
    let safari = /Safari/i;
    let edg = /Edg/i;

    let operaCheck = str.match(opera);
    let safariCheck = str.match(chrom);

    if (arr[i].match(opera)){
        browser.append(arr[i]);
    } else if (arr[i].match(firefox)){
        browser.append(arr[i]);
    } else if (arr[i].match(chrom) && !operaCheck){
        browser.append(arr[i]);
    } else if (arr[i].match(safari) && !safariCheck){
        browser.append(arr[i]);
    } else if (arr[i].match(edg)){
        browser.append(arr[i]);
    }
}

var url = document.location.href;
console.log(url);

let arrs = document.querySelectorAll('a');

console.log(arrs[1].href);

