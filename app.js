let input = document.querySelectorAll('input');

let item = document.querySelector('div');

for(i =0 ; i < input.length; i++){
    function print(){
        item.style.color = input[0].value;
        item.style.backgroundColor = input[1].value;
        item.style.margin = input[2].value;
        item.style.height = input[3].value;
        item.style.width = input[4].value;

    }

    input[i].addEventListener('keyup',print);
}

