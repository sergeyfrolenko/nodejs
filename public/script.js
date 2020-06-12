window.onload=()=>{
  let p=window.location.href;
  if(window.location.pathname=='/') p=p+'index';
  let links=document.querySelectorAll('nav a');
  for(let link of links) {
    if(link == p) {
     link.classList.add('active'); 
    }
  }
}
