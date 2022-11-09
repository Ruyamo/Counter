// let count = 0;

// let btns = document.querySelectorAll('.btn');
// let btn = document.querySelector('#value');

// btns.forEach(btn =>{
//     btn.addEventListener('click', function(e){
//     const styles = e.currentTarget.classList;
//     if(styles.contains("decrease")){
//         count--
//     }
//     else if(styles.contains("increase")){
//         count++
//     }
//     else if(styles.contains("rese")){
//         count = 0;
//     }
//      if(count < 0){
//         value.style.color = "red";
//     }
//     else if(count > 0){
//         value.style.color = "green";
//     }
//     value.textContent = count;
//     })
// })

//counter second Tryout

// let count = 0;

// let btns = document.querySelectorAll('.btn');
// let display = document.querySelector('#value');

// btns.forEach(btn => {
//     btn.addEventListener('click', function(e){
//         const styles = e.currentTarget.classList;
//         if(styles.contains("increase")){
//             count++
//         }
//         else if(styles.contains("decrease")){
//             count--
//         }
//         else if(styles.contains("reset")){
//             count = 0;
//         }
//         if(count > 0){
//             value.style.color = "blue"
//         }
//         else if(count < 0){
//             value.style.color = "brown"
//         }
//         value.textContent = count;
//     })
// })

//Third Tryout
let count = 0;

let btns = document.querySelectorAll('.btn');
let display = document.querySelector('#value');

btns.forEach(btn =>{
btn.addEventListener('click', function(e){
    let styles = e.currentTarget.classList;
    if(styles.contains("increase")){
        count++
    }
    else if(styles.contains("decrease")){
        count--
    }
    else if(styles.contains('reset')){
        count  = 0; 
    }
    if(count >0){
        value.style.color = "green"
    }
    else if(count < 0){
        value.style.color = "red";
    }
    value.textContent = count;
})
})