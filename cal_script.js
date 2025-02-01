let input = document.getElementById('result')
let buttons = document.querySelectorAll('button')

let string = "" //7+9=16
let arr = Array.from(buttons) //[val,val2,val3,...]
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string = eval(string)
            input.value=string
        }
        else if(e.target.innerHTML=="AC"){
            string=""
            input.value = string;
        }
        else if (e.target.innerHTML=="DEL"){
            string = string.substring(0,string.length-1)
            input.value = string;
        }
        else{
            string += e.target.innerHTML
            input.value = string
        }
    })
})