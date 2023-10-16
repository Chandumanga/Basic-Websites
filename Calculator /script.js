let string = "";
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            console.log(e)
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            console.log(e )
            string=""
           document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})