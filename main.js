// let bn=0;
// let tb=0;
// kv.style.position="absolute";

// function right() {
    
//         bn+=40;
//         kv.style.left=bn+'px';

//         if (bn==400) {
                
//                 bn+=40;
//                 bn=0
//                 // num.innerHTML=bn 
//                 kv.style.left=bn+'px'
//         }
// }
// function left() {
    
//     bn-=40;
//     // num.innerHTML=bn 
//     kv.style.left=bn+'px'
//     if (bn==-40) {
                
//         bn+=40;
//         bn=360;
//         // num.innerHTML=bn 
//         kv.style.left=bn+'px'
// }
// }
// function bottom() {
    
//     tb+=40;
//     kv.style.top=tb+'px';

//     if (tb==400) {
                
//         tb+=40;
//         tb=0;
//         // num.innerHTML=bn 
//         kv.style.top=tb+'px'
// }

// }
// function tepa() {
    
//     tb-=40;
//     kv.style.top=tb+'px'
//     if (tb==-40) {
                
//         tb+=40;
//         tb=360;
//         kv.style.top=tb+'px'
// }
// }


// let isleft=Math.random()*400;
// let tas=Math.random()*400;
// non.style.top=Math.round(tas)-Math.round(tas)%40+'px';
// non.style.left=Math.round(isleft)-Math.round(isleft)%40+'px';


let bn = 0;  // chap-o'ng pozitsiya
let tb = 0;  // yuqori-past pozitsiya
let ball = 0;  // ball hisobi
let tezlik = 200;  // harakat tezligi (millisekundlarda)
let yunalish = null;  // hozirgi harakat yunalishi
let harakatId = null;  // avtomatik harakat uchun interval ID

const kv = document.getElementById('kv');
const non = document.getElementById('non');
const scoreDisplay = document.getElementById('score');

kv.style.position = "absolute";
non.style.position = "absolute";

// Ovqatni yangi tasodifiy joyga qo'yish funksiyasi
function ovqatJoyla() {
    let isleft = Math.floor(Math.random() * 10) * 40;
    let tas = Math.floor(Math.random() * 10) * 40;
    non.style.left = isleft + 'px';
    non.style.top = tas + 'px';
}

// Ilon ovqatni yeyilganini tekshirish
function ovqatTekshir() {
    if (bn === parseInt(non.style.left) && tb === parseInt(non.style.top)) {
        ball += 10;  // ball qo'shish
        scoreDisplay.textContent = 'Ball: ' + ball;
        ovqatJoyla();  // yangi ovqat joylashtirish
        
        // Tezlikni oshirish (o'yinni qiyinroq qilish)
        if (tezlik > 50) {
            tezlik -= 10;
            avtomatikHarakat();  // yangi tezlik bilan qayta boshlash
        }
    }
}

// O'ngga harakat
function right() {
    yunalish = 'right';
    avtomatikHarakat();
}

// Chapga harakat
function left() {
    yunalish = 'left';
    avtomatikHarakat();
}

// Pastga harakat
function bottom() {
    yunalish = 'bottom';
    avtomatikHarakat();
}

// Yuqoriga harakat
function tepa() {
    yunalish = 'top';
    avtomatikHarakat();
}

// Avtomatik harakat funksiyasi
function avtomatikHarakat() {
    // Eski intervalni to'xtatish
    if (harakatId) clearInterval(harakatId);
    
    // Yangi interval yaratish
    harakatId = setInterval(() => {
        if (yunalish === 'right') {
            bn += 40;
            if (bn >= 400) bn = 0;  // chegaradan o'tsa, qayta boshidan boshlash
        } else if (yunalish === 'left') {
            bn -= 40;
            if (bn < 0) bn = 360;
        } else if (yunalish === 'bottom') {
            tb += 40;
            if (tb >= 400) tb = 0;
        } else if (yunalish === 'top') {
            tb -= 40;
            if (tb < 0) tb = 360;
        }
        
        // Ilonning pozitsiyasini yangilash
        kv.style.left = bn + 'px';
        kv.style.top = tb + 'px';
        
        // Ovqat yeyilganini tekshirish
        ovqatTekshir();
    }, tezlik);
}

// Klaviatura bilan boshqarish
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        right();
    }
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        left();
    }
    if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        bottom();
    }
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        tepa();
    }
});

// Boshlang'ich ovqatni joylashtirish
ovqatJoyla();

