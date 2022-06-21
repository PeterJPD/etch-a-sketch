const grid=document.querySelector("#grid");
const buttons = document.querySelectorAll('.size-button')
const eraseButton = document.querySelector('#erase')
console.log(buttons)


function generateGrid(size){

    for(let i=0; i<size; i++){
        let divs = document.createElement('div');
        divs.classList.add('square');
        grid.appendChild(divs)
    }

    
    let divs = document.querySelectorAll(".square");
    divs.forEach(div => {
        div.addEventListener('mouseover', function hover(){
            div.classList.add('hover')
        })
    })
}


function generateGridMedium(){
    grid.style.width="864px"
    grid.style.height="864px"
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="25px"
        div.style.width="25px"
    })
}


function generateGridSmall(){
    // grid.style.width="928px"
    // grid.style.height="928px"
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="11.5px"
        div.style.width="11.5px"
    })
}


function generateGridLarge(){
    // grid.style.width="832px"
    // grid.style.height="832px"
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="52px"
        div.style.width="52px"
    })
}

function cleanGrid(){
    //add code to delete everything in the grid
    //use this function inside each conditional befor generationg the grid
    const divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.remove();
    })
}

function cleanDraw(){
    let divs = document.querySelectorAll('.hover')
    divs.forEach(div => {
        div.classList.remove('hover')
    })

}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let choice = button.id
        if(choice==='small'){
            cleanGrid()
            generateGrid(64*64)
            generateGridSmall()
        }
        else if (choice==='medium'){
            cleanGrid()
            generateGrid(32*32)
            generateGridMedium()
        }
        else if(choice==='large'){
            cleanGrid()
            generateGrid(16*16)
            generateGridLarge()
        }
        
    })
})

eraseButton.addEventListener('click', () => {
    cleanDraw()
})

