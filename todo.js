let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    
    var input = document.querySelector('#input').value;
    document.querySelector('#input').value = '';

    var li = document.createElement('li');
    li.className = 'm-3';
    li.textContent = input;

    var listbtn = document.createElement('button');
    listbtn.textContent = 'Delete'
    listbtn.className = 'btn btn-danger ms-3 btn-sm';
    listbtn.addEventListener('click', () => li.remove());
    li.appendChild(listbtn);   
    // document.querySelector('.list').appendChild(listbtn); can not use this lineof code after giving className as list.

    document.querySelector('.addlist').appendChild(li);
    
    

    console.log(input);
})