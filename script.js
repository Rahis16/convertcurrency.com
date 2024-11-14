let btn = document.getElementById('btn');
let input = document.getElementById('input');
let output = document.getElementById('output');
let select1 = document.getElementById('group1');
let select2 = document.getElementById('group2');
let result;

btn.onclick = function(){
    let inputValue = input.value;
    inputValue = Number(inputValue);
    console.log(`inputValue: ${inputValue}`);
    let selectedValue1 = select1.value;
    console.log(`selectedValue1: ${selectedValue1}`);
    let selectedValue2 = select2.value;
    console.log(`selectedValue2: ${selectedValue2}`);

    if(selectedValue1 === 'NEP' && selectedValue2 === 'IND'){
        result = inputValue/1.6;
    }
    else if(selectedValue1 === 'IND' && selectedValue2 === 'NEP'){
        result = inputValue*1.6;
    }
    else if(selectedValue1 === 'USA' && selectedValue2 === 'NEP'){
        result = inputValue*135.03;
    }
    else if(selectedValue1 === 'NEP' && selectedValue2 === 'USA'){
        result = inputValue/135.03;
    }
    else if(selectedValue1 === 'USA' && selectedValue2 === 'IND'){
        result = inputValue*84.45;
    }
    else if(selectedValue1 === 'IND' && selectedValue2 === 'USA'){
        result = inputValue/84.45; 
    }
    else{
        output.value = inputValue;
    }
    output.value = result.toFixed(2);
}
