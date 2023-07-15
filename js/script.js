const razorclock=document.querySelector('.clock');

function razorrunClock() {
    var razortime=new Date();
    // console.log(razortime);
    var razorhrs=razortime.getHours();
    //console.log(razorhrs);
    var razormins=razortime.getMinutes();
    //console.log(razormins);
    var razorsec=razortime.getSeconds();
    //console.log(razorsec);
    var txt="AM";
    if(razorhrs>12){
        razorhrs=razorhrs-12;
        txt="PM";
    }
    else if(razorhrs==0){
        razorhrs=12;
        txt="AM";
    }
    razorhrs=razorhrs<10?'0'+razorhrs:razorhrs;
    razormins=razormins<10?'0'+razormins:razormins;
    razorsec=razorsec<10?'0'+razorsec:razorsec;

    razorclock.innerHTML=`${razorhrs} : ${razormins} : ${razorsec} ${txt}`;

}

razorrunClock();
setInterval(razorrunClock,1000);


var a="35";
console.log(a[0]);
console.log(a[1]);