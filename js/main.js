/* #region [1] VARS */
const wH = window.innerHeight;
const scrollers = document.getElementsByClassName('scroll');
const NEXT = 'NEXT';
const PREV = 'PREV'
let elemt = 0;
let intElmt = 0;
let maxElemt = scrollers.length;
/* #endregion */

// var listener = document.getElementById('listener');

/* #region [2] STORE */
const store = (reducer)=>{
    const state = {};
    const listeners = [];

    const getstate = ()=> state;

    const subscribe = (listener)=>{
        listeners.push(listener);
    };

    const dispatch = (action)=>{
        state = reducer(state, action);
        listeners.forEach(listener => listener(state));
    };

    return{ getstate, dispatch, subscibe }
};
/* #endregion */

/* #region [3] REDUCER */
const reducer = (state, action)=>{
    switch (action.type) {
        case NEXT:
            return Object.assign({}, ...state, );
            break;

        case PREV:
            return Object.assign({}, ...state, );

        default:
            return state;
    }

};
/* #endregion */

/* #region [4] ACTIONS */
const actions = {
    next(payload){
        return {
            type: NEXT,
            
        }
    },

    prev(){
        return{
            type: PREV,

        }
    }
}
/* #endregion */

/* #region [5] fx WHEEL */
document.addEventListener("wheel", (x)=>{
    intElmt+=1;
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
            console.log(x.target.id);
            console.log(x.target.nextElementSibling.id); // REVISAR!!!
            scrollers[elemt].classList.add('slide');
            elemt += 1;
        };
    }
    

});
/* #endregion */

/* #region [6] fx KEY */

/* #endregion */

/* #region [7] fx CLICK */

/* #endregion */
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