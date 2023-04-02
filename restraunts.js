

function savetoCrudCrud(event){
    event.preventDefault()
    const dish = document.getElementById('dish').value
    const price= document.getElementById('price').value
    const table= document.getElementById('table').value
   

    const order={dish,price,table}
    axios.post('https://crudcrud.com/api/c2202b82353548949c7f52f22b6f6d84/order',order)
    .then((res)=>{
       console.log(res)
    })
    .catch((err)=>{document.body.innerHTML=document.body.innerHTML + `<h4>Something Went Wrong in post</h4>`})
    onscreen(order);
}


window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/c2202b82353548949c7f52f22b6f6d84/order')
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            onscreen(res.data[i])
        }
    })
    .catch((err)=>{document.body.innerHTML=document.body.innerHTML + `<h4>Something Went Wrong in window</h4>`})
})


function onscreen(order){
    document.getElementById('dish').value=''
    document.getElementById('price').value=''
    
    const parent1=document.getElementById('table1')
    const parent2=document.getElementById('table2')
    const parent3=document.getElementById('table3')
    
    const child=`<li id=${order._id}>${order.table} ---> ${order.dish} ---> ${order.price}
    
                <button id='btn2' onclick=Delete('${order._id}','${order.table}')>Delete</button></li>`

    if(order.table ==='table1'){
        parent1.innerHTML = parent1.innerHTML + child
    }
    else if(order.table ==='table2'){
        parent2.innerHTML = parent2.innerHTML + child
    }
    else if(order.table ==='table3'){
        parent3.innerHTML = parent3.innerHTML + child
    }
} 

function Delete(id,table){
    const data=axios.delete(`https://crudcrud.com/api/c2202b82353548949c7f52f22b6f6d84/order/${id}`)
    .then((res)=>{
           removeFromScreen(id,table)
    })
    .catch((err)=>{document.body.innerHTML=document.body.innerHTML + `<h4>Something Went Wrong</h4>`})
    }

function removeFromScreen(id,table){
    const parent1=document.getElementById('table1')
    const parent2=document.getElementById('table2')
    const parent3=document.getElementById('table3')
    const child=document.getElementById(id)

    if(child){
        if(table==='table1'){
            parent1.removeChild(child)
        }
        if(table==='table2'){
            parent2.removeChild(child)
        }
        if(table==='table3'){
            parent3.removeChild(child)
        }
    }
}
