const d=document;

function clock(){
    let hours=d.getElementById('hour');
    let minutes=d.getElementById('minutes');
    let seconds=d.getElementById('seconds');

    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();

    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
}

const interval=setInterval(clock, 1000);