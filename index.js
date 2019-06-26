
// var form=document.querySelectorAll('.formdo')
// for (let i of form)
// i.addEventListener('click',function(){
//     {alert('hiii') }
// })
// var inputsField = document.querySelectorAll("input")
// inputsField.forEach((input) => {
//     input.addEventListener("keyup", (e) => {
//         validation(e.target, regex["e.target.attributes.name.value"])
//     })
// });

// function validation(field){
//     if(regex[field.name].test(field.value)){
//         field.className= "valid"
//     }
//     else{
//         field.className="invalid"
//         alert("asma")
//     }

// }

var regex= { 
    name:/^[a-zA-Z-]{2,6}/,
    email:/^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}/,
    Password:/^[a-zA-Z0-9_]{8,15}/,
    comments:/^[a-zA-Z0-9_]{8,73}/} 
    
//     var form=document.querySelectorAll('.invalid')
// for (let i of form){
// i.addEventListener('click',function(){
//        alert('hiii')
//     })}

function sendform(){
//     if (document.querySelectorAll('.valid')){
//         for (let i of form)
//         {
//       i.addEventListener('click',function(){
//      {alert('hiii') }
//     }
// }
// }
//      else if (document.querySelectorAll('.invalid')){
//         for (let i of form){
//         i.addEventListener('click',function(){
//             {alert('bbb') }
//         }
//      }

    // }
    if (document.getElementById('name').value === ""){
        alert(`name is empty`)
        
    } 

    else if (document.forms.myform.elements.email.value==="") {
        alert("email empty")
    }
    else if (regex.email.test(document.forms.myform.elements.email.value)===false){
        alert("email invalid")
    }
    else if (document.forms.myform.elements.Password.value==="") {
        alert("Password empty")
    } 
    else if (regex.email.test(document.forms.myform.elements.Password .value)===false){
        alert("Password invalid")
    }
    else if (document.forms.myform.elements.comments.value==="") {
        alert("comments empty")
    } 
    
} 