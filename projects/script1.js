
const button=document.querySelectorAll('.button');
const body=document.querySelector('body');   

button.forEach(( button)=>{
    button.addEventListener('click',(elem)=>{
        console.log(elem.target.id)
        if(elem.target.id==='grey')
        {
            body.style.backgroundColor=elem.target.id;
        }
        if(elem.target.id==='white')
        {
            body.style.backgroundColor=elem.target.id;
        }
        if(elem.target.id==='blue')
        {
            body.style.backgroundColor=elem.target.id;
        }
        if(elem.target.id==='yellow')
        {
            body.style.backgroundColor=elem.target.id;
        }
    })
})
