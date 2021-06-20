console.log("Welcome to News App");
const accordion=document.getElementById('accordion');
const xhr=new XMLHttpRequest();
let country='us';
let html="";
let apiKey="5d76cb8118c94f54a85efd1d1131e212";
let src=`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${apiKey}`
xhr.open('GET',src,true);
xhr.onprogress= function(){
     "Onprogress";
}
xhr.onload=function(){
    let obj=JSON.parse(this.responseText);
    obj=obj['articles'];
    obj.forEach((element,index)=> {
        html+= `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
         <b> ${element['title']} </b>
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordion">
          <div class="accordion-body">
           ${element['description']}  <strong> <a href="${element['url']}">Read More </a></strong> 
          </div>
        </div>
      </div>`
        
    });
    accordion.innerHTML=html;
}
xhr.send();
