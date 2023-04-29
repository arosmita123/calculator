// var input= document.getElementById('input')
// var string = "";
// var buttons = document.querySelectorAll('.button')

// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
    //    buttonText = e.target.innerText;
    //    console.log(e.target);

//        if(e.target.innerHTML == "="){
//        string = eval(string);
//        document.querySelector('input').value = string;
//        }
//        else if(e.target.innerHTML == "C"){
//         string = " ";
//         document.querySelector('input').value = string;
//        }
//        else{
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//        }
//     })
// })



var input= document.getElementById('input')
var buttons = document.querySelectorAll('.button')
var string = "";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        let variable = e.target.innerHTML;
        if(variable == "="){
            string = eval(string);
            document.querySelector('input').value = string;
            }
            else if(variable == "C"){
             string = " ";
             document.querySelector('input').value = string;
            }
            else{
             console.log(e.target)
             string = string + e.target.innerHTML;
             document.querySelector('input').value = string;
            }

    })
}








