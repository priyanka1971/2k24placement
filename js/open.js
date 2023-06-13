const boxdata=[
    {
    img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
    title:'summer internship',
    desc:'may to june'
    },
    {
        img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
        title:'summer internship',
        desc:'may to june'
        },
    
    {
        img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
        title:'summer internship',
        desc:'may to june'
     },
        
     {
        img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
        title:'summer internship',
        desc:'may to june'
     },

     {
        img:'https://assets.website-files.com/5c3c1d73652ba045d765cdb1/5e1cea862226b08b3ff2ffd8_open_source.png',
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
