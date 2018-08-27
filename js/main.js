/* #region [1] VARS */
const wH = window.innerHeight;
const scrollers = document.getElementsByClassName('scroll');
let elemt = 0;
let intElmt = 0;
let maxElemt = scrollers.length;
/* #endregion */

var listener = document.getElementById('listener');

listener.addEventListener("wheel", (x)=>{
    intElmt+=1;

    /* #region [2] fx */
    if(intElmt>=3){
        intElmt=0;

        if(elemt>=maxElemt){
            elemt=0;
            scrollers[0].classList.remove('bottom');
            scrollers[0].classList.add('top');
            for(let i = 0; i<maxElemt; i++){        
                scrollers[i].classList.remove('slide');
            };
            setTimeout(()=>{
                scrollers[0].classList.remove('top');
                scrollers[0].classList.add('bottom');
            },600)
            
        }else{
            scrollers[elemt].classList.add('slide');
            elemt += 1;
        };
    }
    /* #endregion */

});

// document.addEventListener('wheel', (x)=>{
//     let df = document.getElementById("sec");
//     console.log("ev.pY: ", x.pageY);
//     console.log("wH: ", hw);
//     console.log("sY: ", window.scrollY);
    

   
//         if(window.scrollY>200){
//             change(1086);
//         }
//         console.log("ev.pY2: ", x.pageY);
//         console.log("wH2: ", hw);
//         console.log("sY2: ", window.scrollY);
//         console.log("<!-----------         ----------!>");
// });

// document.addEventListener('keypress',(event)=>{
//     console.log(window);
//     switch (event.key){
//         case'ArrowDown':
//             change(1086);
//             break;
//         case'ArrowUp':
//             change(0);
//             break;
//     }
// });

// function change( value ){
//     window.scrollTo(0, value);
// }