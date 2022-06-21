let grid=document.querySelector("#grid");


size = 16*16

for(let i=0; i<size; i++){
    let divs = document.createElement('div');
    divs.classList.add('square');
    grid.appendChild(divs)
}

let divs = document.querySelectorAll(".square")

divs.forEach(div => {
    div.addEventListener('mouseover', function hover(){
        div.classList.add('hover')
    })
})