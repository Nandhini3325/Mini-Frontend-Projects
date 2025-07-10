document.getElementById('add').addEventListener('click', function(){
    let n1=parseInt(document.getElementById('num1').value);
    let n2=parseInt(document.getElementById('num2').value);
    if(!isNaN(n1) && !isNaN(n2)){
        document.getElementById('result').textContent=n1+n2;
    }
    else{
        document.getElementById('result').textContent="Enter Valid Number";
    }
});

document.getElementById('sub').addEventListener('click', function(){
    let n1=parseInt(document.getElementById('num1').value);
    let n2=parseInt(document.getElementById('num2').value);
    if(!isNaN(n1) && !isNaN(n2)){
        document.getElementById('result').textContent=n1-n2;
    }
    else{
        document.getElementById('result').textContent="Enter Valid Number";
    }
});

document.getElementById('mul').addEventListener('click', function(){
    let n1=parseInt(document.getElementById('num1').value);
    let n2=parseInt(document.getElementById('num2').value);
    if(!isNaN(n1) && !isNaN(n2)){
        document.getElementById('result').textContent=n1*n2;
    }
    else{
        document.getElementById('result').textContent="Enter Valid Number";
    }
});


document.getElementById('div').addEventListener('click', function(){
    let n1=parseInt(document.getElementById('num1').value);
    let n2=parseInt(document.getElementById('num2').value);
    if(n2!=0){
    if(!isNaN(n1) && !isNaN(n2)){
        document.getElementById('result').textContent=n1/n2;
    }
    else{
        document.getElementById('result').textContent="Enter Valid Number";
    }}
    else{
        document.getElementById('result').textContent="Denominator cannot be zero"
    }
});