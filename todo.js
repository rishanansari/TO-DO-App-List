let button = document.querySelector('#btn');
button.addEventListener('click', function(){
    
    let input = document.querySelector('#input').value;
    document.querySelector('#input').value = '';
    
    console.log(input);
})