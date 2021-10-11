var count = 1
var gamefinish = false

const tic = (el) => {
    if (gamefinish == false){
        if ( !(el.className.includes('X')) && !(el.className.includes('O'))) {
            if (count%2 == 1){
                el.innerText = 'X'
                el.classList.toggle('X')
            }
            else{
                el.innerText = 'O'
                el.classList.toggle('O')
            }
            count+=1
            winner()
        }
    }
}

const hov = (el) => {
    el.classList.toggle('hover')
}

const winner = () => {
    var box0 = document.getElementById('box0').innerText
    var box1 = document.getElementById('box1').innerText
    var box2 = document.getElementById('box2').innerText
    var box3 = document.getElementById('box3').innerText
    var box4 = document.getElementById('box4').innerText
    var box5 = document.getElementById('box5').innerText
    var box6 = document.getElementById('box6').innerText
    var box7 = document.getElementById('box7').innerText
    var box8 = document.getElementById('box8').innerText
    
    var win = ''
    if ((box0 == box1) && (box1 == box2) && box0 != ''){win = box0}
    if ((box3 == box4) && (box4 == box5) && box3 != ''){win = box3}
    if ((box6 == box7) && (box7 == box8) && box6 != ''){win = box6}

    if ((box0 == box3) && (box3 == box6) && box0 != ''){win = box0}
    if ((box1 == box4) && (box4 == box7) && box1 != ''){win = box1}
    if ((box2 == box5) && (box5 == box8) && box2 != ''){win = box2}

    if ((box0 == box4) && (box4 == box8) && box0 != ''){win = box0}
    if ((box2 == box4) && (box4 == box6) && box2 != ''){win = box2}

    if (win == 'X'){
        document.getElementById('status').classList.toggle('you-won')
        document.getElementById('status').innerText = 'Congratulations! X Is the Winner!'
        gamefinish = true        
    }
    else if (win == 'O'){
        document.getElementById('status').classList.toggle('you-won')
        document.getElementById('status').innerText = 'Congratulations! O Is the Winner!'
        gamefinish = true
    }
}

const restart = () => {
    count = 1
    gamefinish = false
    document.getElementById('status').classList.remove('you-won')
    document.getElementById('status').innerText = 'Move your mouse over a square and click to play an X or an O.'
    var board = document.getElementById('board').children
    for (let a = 0; a<9; a++){
        board[a].classList.remove('X')
        board[a].classList.remove('O')
        board[a].innerText = ''
    }
}

window.onload = () => {
    document.getElementById('game').children[2].children[0].onclick = ()=>restart()
    var board = document.getElementById('board').children
    for(let i = 0; i<9; i++){
        board[i].id = 'box'+String(i)
        board[i].classList.toggle('square')
        board[i].onclick = () => tic(board[i])
        board[i].onmouseover = () => {board[i].classList.toggle('hover')}
        board[i].onmouseleave = () => {board[i].classList.toggle('hover')}
        
    }
    

}