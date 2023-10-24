let hrt = document.getElementById('hr');
let mint = document.getElementById('min');
let sect = document.getElementById('sec');
let mst = document.getElementById('ms');
let start = document.getElementById('start');
let stp = document.getElementById('stop');
let reset = document.getElementById('reset');
let rc = document.getElementById('list');
let rcb = document.getElementById('rcb');
  let hr,min,sec,ms,div;
function values(){
   hr=0,min=0,sec=0,ms=0;
 };
  values();
  let c;
   let t=0,i;
start.addEventListener('click',()=>{
  if(!(i ==false)){
    i=false;
    c = setInterval('timer()',10);
  }
  });
  stp.addEventListener('click',()=>{
      i=true;
      clearInterval(c);
  });
  reset.addEventListener('click',()=>{
    i=true;
    clearInterval(c);
    values();
    assignment();
    rc.innerHTML ='';
    t=0;
  });

  function timer(){
   ms = ms + 1;
   
     if(ms == 100){
       sec = sec + 1;
       ms =0;
      }
      if(sec == 60){
         min = min + 1;
         sec = 0;
      }
      if(min == 60){
          hr = hr + 1;
          min =0;
      }
      assignment();
    }
    let assignment = () =>{
      mst.innerHTML = (ms < 10)? "0"+ms : ms;
      sect.innerHTML = (sec <10)? "0"+sec : sec;
      mint.innerHTML = (min <10)? "0"+min : min;
      hr.innerHTML = (hr <10)? "0"+hr : hr;

    }
    

       let record = ()=>{
         if(i == false){
           t = t+1;
            let tm = (t<10)? "0" + t:t;
            div = document.createElement('div');
           div.classList ='record';
           div.innerHTML =   `  
           <span class="sno">${tm}</span>
           <span class="rtime">${hrt.innerHTML}:${mint.innerHTML}:${sect.innerHTML}:${mst.innerHTML}</span>
        `;
        div.id ='l1';
          if(t > 1){
            let pr = rc.firstElementChild;
             pr.removeAttribute('id');
          }
          rc.insertAdjacentElement('afterbegin',div); 
         }
       }

       alert('hi');