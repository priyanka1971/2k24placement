const boxdata=[
    {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
    title:'summer internship',
    desc:'may to june'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
        },
    
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
        
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     }, {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     
      
]

const postcontainer=document.querySelector('.expintern');
const postmethods =()=>{
     boxdata.map((cardData)=>{
        const postelement=document.createElement('div');
        postelement.classList.add('box');
        postelement.innerHTML =` 
      
        <div class="front">
        <img src=${cardData.img}  alt="" srcset="" / >
        </div> 
        <div class="back">
         <h2>${cardData.title}</h2>
         <p>${cardData.desc}</p>
        
         <div class="btns">
         <a href="#"><button type="submit">Github profile</button></a>
         <a href="#"><button type="submit">LinkedIn profile</button></a>

    </div>
         </div>
    
     `
       postcontainer.appendChild(postelement);
     })
}
postmethods()
// function scrollToEl(elementId){
//    const el=document.getElementById(elementId);
//    scrollTo({top:el.offsetTop-100,behavior:'smooth'});
// }
// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doAnimation(scrollPos) {
//   const el=document.getElementById('anime');
//   if(window.scrollY> 200){
//   el.classList.add('animate__animated' ,'animate__fadeIn');
//   el.classList.remove('hideanime');
//   }
  
// }

// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doAnimation(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
window.addEventListener('scroll',reveal);
function reveal(){
   var reveals=document.querySelectorAll('.reveal');
 for(i=0;i<reveals.length;i++){
   var windowheight=window.innerHeight;
   var revealTop= reveals[i].getBoundingClientRect().top;
   var revealpoint =150;
   if(revealTop<windowheight-revealpoint)
   reveals[i].classList.add('active');
   else
   reveals[i].classList.remove('active');
 }
}