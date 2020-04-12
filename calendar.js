var today =new Date();

const start=()=>{
    var mNu=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var year = today.getFullYear(),
month = today.getMonth(),
date = today.getDate();
    var st=new Date(Date.UTC(year,month,1));
    st=st.getDay();
    tMo=mNu[month];
    var table= document.querySelector('table'),th= document.getElementsByTagName('th');
    th[0].innerHTML = today.toLocaleDateString([],{
        month:'long',
        year:'numeric'
    });
    add='<tr><th><th><th><th><th><th><th>';
    if((th.length-8)-st < tMo){
        table.innerHTML+=add;
        table.style.marginTop='8vh';
    } else if(th.length -(8+st) > tMo) {
        table.innerHTML =`<thead> <tr> <td onclick=dec()>« <th colspan=5><td onclick=inc()>» <thead class=day> <tr> <th>Sun <th>Mon <th>Tue <th>Wen <th>Thu<th>Fri <th>Sat <tbody> <tr> <th> <th> <th> <th> <th> <th> <th>  <tr> <th><th><th><th> <th> <th> <th> <tr> <th><th> <th><th><th><th> <th>  <tr> <th><th> <th> <th> <th> <th> <th>  <tr> <th><th> <th> <th> <th> <th> <th> `;
        table.style.marginTop='12vh';
        th[0].innerHTML = today.toLocaleDateString([],{
            month:'long',
            year:'numeric'
        });
        table.style.marginTop='12vh';
    }
    for(let m=0; m<st; m++) 
      th[m+8].innerHTML='';
    for(var i=1; i<=tMo; i++)
      th[(st)+(i+7)].innerHTML=i;
    for(let j=i+(7+st); j<th.length; j++) 
    th[j].innerHTML='';
    daTo();
}
const daTo =()=>{
    th= document.getElementsByTagName('th');
    dateToday=th[(new Date(today.getFullYear(),today.getMonth(),1).getDay())+(today.getDate()+7)].style; 
    if(new Date().getFullYear()==today.getFullYear()&&new Date().getMonth()==today.getMonth()) { 
    dateToday.background='#ee6e73'; 
    dateToday.color='white'; 
    dateToday.boxShadow='inset 0 0 1px #fff,1px 1px 2px #ee6e73'; 
    dateToday.borderRadius='50%'; 
    dateToday.textShadow='0 0 1px #fff'; 
    } else {
        for(let i of th){
            i.style.background=''; 
            i.style.color=''; 
            i.style.boxShadow=''; 
            i.style.borderRadius=''; 
            i.style.textShadow='';
        }
    }
    dialog= document.querySelector('dialog');
    th[(new Date(today.getFullYear(),today.getMonth(),1).getDay())+(today.getDate()+7)].addEventListener('click',()=>{
        document.querySelector('span').innerHTML =new Date().toLocaleDateString('en-US',{
            weekday:'long',
            year:'numeric',
            month:'short',
            day:'numeric'
        })
        dialog.show();
    })
    
}
onload=()=>start();
const sY=(x)=>today.setYear(x);
x=0+today.getMonth();
y=0+today.getFullYear();
const tI=()=>{
    if(x < 12) x++ ;
    else {
        x=1;
        sY(++y);
    }
}
const tD=()=>{
    if(x != 0) x-- ;
    else {
        sY(--y);
        x=11;
    }
}
function dec(){
    tD();
    today.setMonth(x);
    start();
}
function inc(){
    tI();
    today.setMonth(x);
    start();
}