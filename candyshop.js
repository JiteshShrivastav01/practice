

function savetoCrudCrud(event){
    event.preventDefault()
    const candyname = document.getElementById('candyname').value
    const description= document.getElementById('description').value
    const price= document.getElementById('price').value
    const quantity= document.getElementById('quantity').value

    const candy={candyname,description,price,quantity}
    const data=axios.post('https://crudcrud.com/api/6d733ed2b0d14c418dd5f7126f69ca64/sell',candy)
    .then((res)=>{
        onscreen(res.data);
    })
    .catch((err)=>{document.body.innerHTML=document.body.innerHTML + `<h4>Something Went Wrong in post</h4>`})
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/6d733ed2b0d14c418dd5f7126f69ca64/sell')
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            onscreen(res.data[i])
        }
        var eclair=100
        var _5star=100
        var dairymilk=100
       
        for(var i=0;i<res.data.length;i++){
            if(res.data[i].candyname==='Eclair'){
                eclair = eclair -res.data[i].quantity
            }   
            else if(res.data[i].candyname==='5 star'){
                _5star = _5star - res.data[i].quantity
               
            }
            else if(res.data[i].candyname==='Dairy Milk'){
                dairymilk = dairymilk - res.data[i].quantity
            }
        }
        remaining(eclair,_5star,dairymilk)

    })
    .catch((err)=>{document.body.innerHTML=document.body.innerHTML + `<h4>Something Went Wrong in window</h4>`})
}) 


function onscreen(candy){
    document.getElementById('candyname').value=''
    document.getElementById('description').value=''
    document.getElementById('price').value=''
    document.getElementById('quantity').value=''
    const parent=document.getElementById('addlist')
    
    const child=`<li id='${candy._id}''> ${candy.candyname} --> ${candy.description} --> ${candy.price} --> ${candy.quantity}</li>`
    
    parent.innerHTML = parent.innerHTML + child

} 

function remaining(eclair,_5star,dairymilk) {
    axios.get(`https://crudcrud.com/api/6d733ed2b0d14c418dd5f7126f69ca64/sell`)
    .then((res)=>{
        
        const parent=document.getElementById('remain')
        const child=`<li>Eclair REMAINING :${eclair} <br>
        5 Star REMAINING :${_5star}  <br>
        Dairy Milk REMAINING :${dairymilk}</li>`

        parent.innerHTML=parent.innerHTML+child
    })
}



function quantity1(event){
        const q=document.getElementById('quantity')
        q.value=1
}
function quantity2(event){
    const q=document.getElementById('quantity')
    q.value=2
}
function quantity3(event){
    const q=document.getElementById('quantity')
    q.value=3
}