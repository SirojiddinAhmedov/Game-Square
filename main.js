let bn=0;
let tb=0;
kv.style.position="absolute";

function right() {
    
        bn+=40;
        kv.style.left=bn+'px';

        if (bn==400) {
                
                bn+=40;
                bn=0
                // num.innerHTML=bn 
                kv.style.left=bn+'px'
        }
}
function left() {
    
    bn-=40;
    // num.innerHTML=bn 
    kv.style.left=bn+'px'
    if (bn==-40) {
                
        bn+=40;
        bn=360;
        // num.innerHTML=bn 
        kv.style.left=bn+'px'
}
}
function bottom() {
    
    tb+=40;
    kv.style.top=tb+'px';

    if (tb==400) {
                
        tb+=40;
        tb=0;
        // num.innerHTML=bn 
        kv.style.top=tb+'px'
}

}
function tepa() {
    
    tb-=40;
    kv.style.top=tb+'px'
    if (tb==-40) {
                
        tb+=40;
        tb=360;
        kv.style.top=tb+'px'
}
}


let isleft=Math.random()*400;
let tas=Math.random()*400;
non.style.top=Math.round(tas)-Math.round(tas)%40+'px';
non.style.left=Math.round(isleft)-Math.round(isleft)%40+'px';


