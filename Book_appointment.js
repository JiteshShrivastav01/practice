var form=document.querySelector('form')
var username=document.querySelector('#username')
var email=document.querySelector('email')
var password=document.querySelector('password')
var btn=document.querySelector('#btn')
var error=document.querySelector('#error')
form.addEventListener('submit',onsubmit)

function onsubmit(e){
    e.preventDefault()
    if(username.value==='' || password.value==='' || email.value===''){
        error.innerHTML='Please Fill all required data.'
        setTimeout(()=> error.remove(),2000)
    }
    else if(username.value!='' || password.value!='' || email.value!=''){
        console.log('Submitted.')
    }
}
