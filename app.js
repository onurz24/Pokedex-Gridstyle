
$('#bigRoot').hide();
let i = 0;
let myButton = document.querySelector('#load_more');
let ziel = 9;
let arr = [];
let stop = false;

myButton.onclick = async ()=>{
    for(i; i < ziel; i++){
    const anfrage = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    const data = await anfrage.json();
    const anfrage2 = await fetch(data.results[i].url)
    const data2 = await anfrage2.json();

$('#root').append(`
    <span 
        id='${data2.name.toUpperCase()}'  
        onclick="bigMode(this.innerHTML) ;"
        class="pokemon ${data2.types[0].type.name} ">
                 ${data2.id}. <br>
                 ${data2.name.toUpperCase()} <br>
                 Type: ${data2.types[0].type.name}  <br>
                 Attack:  ${data2.moves[0].move.name}<br>
                <img src="${data2.sprites.versions['generation-ii'].crystal.front_default}">     
    <span>
                                  `);
};
ziel+=9;
}

myButton.click()


let autostart = setInterval(() => {
    if(ziel < 151 && stop == false){
        myButton.click()
        $('#load_more').show()
    }else{
        clearInterval(autostart)
        $('#load_more').hide()
    }
}, 500);

function bigMode(x) {
    $('#root').css({
       'filter'         : 'blur(15px)',
       '-webkit-filter' : 'blur(15px)',
       '-moz-filter'    : 'blur(15px)',
       '-o-filter'      : 'blur(15px)',
       '-ms-filter'     : 'blur(15px)'
    });
    $('header').hide()
    $('#pokemon_info').html(`${x}`)
    $('#bigRoot').slideDown();

    // let a = 0;
    // let interval2= setInterval(() => {
    // if(a<=15){a++;$('#root').css({"filter":`blur(${a}px)`})}else{clearInterval(interval2)
    // }}, 10);
  }




$('#bigRoot').click(()=>{

    $('#bigRoot').slideUp(()=>{
        $('#root').css({
            'filter'         : 'blur(0px)',
            '-webkit-filter' : 'blur(0px)',
            '-moz-filter'    : 'blur(0px)',
            '-o-filter'      : 'blur(0px)',
            '-ms-filter'     : 'blur(0px)'
         });
    });
    $('header').slideDown(1000)
})



function search(input){
    input =  input.toUpperCase();
    stop = true;
 arr = document.querySelectorAll(".pokemon");
// alert(input)
arr.forEach(element => {
    if (element.id.includes(input)) {
        // Yes, it's there
        element.style.display ="flex"
    }else{
        element.style.display ="none"
    }
});

}



$('#CB').click(()=>{
    console.log(23)
    stop = false;
    arr.forEach(element => {
        element.style.display ="flex"
    });
})























































// let i = 0;
// setInterval(async() => {
//  const anfrage = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
//  const data = await anfrage.json();

// const anfrage2 = await fetch(data.results[i].url)
// const data2 = await anfrage2.json();
// console.log(data2.name)
// i++;
//                     $('#root').append(`
//         <span class="pokemon ${data2.types[0].type.name} ">
//                                      ${data2.id}. ${data2.name.toUpperCase()} <br>
//                                     Type: ${data2.types[0].type.name}  <br>
//                                      Attack: <br> ${data2.moves[0].move.name}
//                                 <img src="${data2.sprites.versions['generation-ii']
//                             .crystal.front_default
//                         }">     
//         <span>
//                                 <br>
//                                `)

// }, 500);




// function fetchPics(i) {
//     fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
//         .then(response => response.json())
//         .then(data => {
//             //Seconds Fetch
//             console.log(data.results[i].url)
//             fetch(data.results[i].url)
//                 .then(response => response.json())
//                 .then(data => {
//                     $('#root').append(`
//         <span class="pokemon ${data.types[0].type.name} ">
//                                      ${data.id}. ${data.name.toUpperCase()} <br>
//                                     Type: ${data.types[0].type.name}  <br>
//                                      Attack: <br> ${data.moves[0].move.name}
//                                 <img src="${data.sprites.versions['generation-ii']
//                             .crystal.front_default
//                         }">     
//         <span>
//                                 <br>
//                                `)
//                 })
//         })
// }
// let i = 0
// let interval = setInterval(() => {
//     if (i >= 151) {
//         clearInterval(interval)
//     } else {
//         fetchPics(i)
//         i++
//     }
// }, 100)
