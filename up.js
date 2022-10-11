let patternPhonKG = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}/
let patternPhonRu = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/
const input = document.querySelector('#Number')
const btn = document.querySelector('button')
const flag = document.querySelector('#Flag')
btn.addEventListener('click', e => {
    if (patternPhonKG.test(input.value)) {
        flag.innerHTML = `
            <div>KG</div>
        `
    }else if (patternPhonRu.test(input.value)) {
        flag.innerHTML = `
            <div>RU</div>
        `
    }
})


let arr1 = 0;
function addNumber () {
    arr1++;
    console.log(arr1,"array");
    if (arr1 === 3) {
        return
    }else {
        return addNumber()
    }
}
addNumber(arr1)


let arr = [4,5,6]
arr.push (7,8,9,10)
arr.unshift(1,2,3)

console.log(arr);


let array = [1,2,3,4,5]
console.log(array[4]);

function countChar() {
    console.log("loremipsumdolor".match(/o/g));
}
countChar()