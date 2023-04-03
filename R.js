function save(event){
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value

    const user={name,email,password}
    const data=axios.post('https://crudcrud.com/api/53e6cdcafae1463894632a889a0bffcd/registration',user)
    .then((res)=>{
        const parent=document.getElementById('msg')
        parent.style.color='green'
        parent.innerHTML=parent.innerHTML+'Thanks for registering.'
    })
    .catch((err)=>{
        const parent=document.getElementById('msg')
        parent.innerHTML=parent.innerHTML+'Enter valid details.'
    })
}

/*
window.addEventListener('DOMContentLoaded',()=>{
    const data=axios.get('https://crudcrud.com/api/53e6cdcafae1463894632a889a0bffcd/registration')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            onscreen(res.data[i])
        }
    })
    .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + '<h1>ERROR IN WINDOW</h1>'
    })
})

function onscreen(user){
    document.getElementById('name').value=''
    document.getElementById('email').value=''
    document.getElementById('password').value=''

    const parent=document.getElementById('adduser')
    const child=`<li id=${user._id}>${user.name} --> ${user.email} --> ${user.password}
    
                <button onclick=Delete('${user._id}')>Delete</button>
                <button onclick=Edit('${user._id}','${user.name}','${user.email}','${user.password}')>Edit</button></li>`

    parent.innerHTML=parent.innerHTML + child
}

function Delete(id){
    const data=axios.delete(`https://crudcrud.com/api/53e6cdcafae1463894632a889a0bffcd/registration/${id}`)
    .then((res)=>{
        removeFromScreen(id)
    })
    .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + '<h1>ERROR IN DELETE</h1>'
    })
}

function removeFromScreen(id){
    const parent=document.getElementById('adduser')
    const child=document.getElementById(id)
    if(child){
        parent.removeChild(child)
    }
}

function Edit(id,name,email,password){
    axios.put(`https://crudcrud.com/api/53e6cdcafae1463894632a889a0bffcd/registration/${id}`)
    .then((res)=>{
        document.getElementById('name').value=name
        document.getElementById('email').value=email
        document.getElementById('password').value=password

        removeFromScreen(id)
    })
    .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + '<h1>ERROR IN DELETE</h1>'
    })
}

*/

