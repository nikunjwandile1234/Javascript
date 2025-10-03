// javascript mostly go in sequentaially
// and invoke mostly in particuar events menttined in evcent listener

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('image4').onclick = function() {
        alert("this is image 4");
    }
});
// event have false as third parmeter 
document.addEventListener('DOMContentLoaded', function() {
    let p = document.getElementById('image3');
    if (p) {
        p.addEventListener('click', () => {
            alert("the image is clicked");
        });
    }
});
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('images').addEventListener('click',function(){
        console.log("the image id clicked in ul");
        
    },true)
    // document.getElementById('image5').addEventListener('click',function(a){
    //     console.log("image 5 clicked");
    //     a.stopPropagation();
    // },true)
    

})
//noe to remove images while clicking 
document.addEventListener('DOMContentLoaded', function(){
   let img = document.querySelector('#images')
   img.addEventListener('click',function(e){

    if(e.target.tagName==='IMG')
    {
      let removeit=e.target.parentNode
     removeit.remove();
     console.log(`the image is removed ${removeit}`)
    }
   })


})


// prevent default now makes google not working 
document.addEventListener('DOMContentLoaded', function(a){
    let p=document.getElementById('google')
    p.addEventListener('click',(e)=>{
        console.log("google is called");
        
        e.preventDefault();
        e.stopPropagation();

    },false)

})



// type ,timestamp,defaultprevented
//target.toelement,srcelement,currenttarget
//clientx,clienty,screenx,screeny
// alt ket ,shift key ,ctrlkey,keycodes
  

// false and true in event listner is used to make event bubbling and event capturing 
//bubblles go from down to up 
// true is used for capturing the image fro top to bottom 
