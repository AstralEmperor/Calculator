// Value input variable
const inputField = document.getElementById('calculator__result-view');

// Insert number on input fied
const insertNum = num => inputField.textContent += num;

// Do operation using eval()
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// Remove 1 val at time
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0,inputField.textContent.length - 1);

// Clear all the input
const clearInput = () => inputField.textContent = "";

window.addEventListener('keydown',(num) =>{
    let validkeys = ['0','1','2','3','4','5','6','7','8','9','10'];
    if(validkeys.indexOf(num.key) >= 0){
    inputField.textContent +=num.key;
    }
});
window.addEventListener('keydown',(operation) =>{
    let opkeys = ['+','-','%','*','/'];
    if(opkeys.indexOf(operation.key) >= 0){
        inputField.textContent +=operation.key;
    }
});
