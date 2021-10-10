var count = 1

const tic = (el) => {
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
    }
}

const hov = (el) => {
    el.classList.toggle('hover')
}

window.onload = () => {
    var board = document.getElementById('board').children
    for(let i = 0; i<9; i++){
        board[i].id = 'box'+String(i)
        board[i].classList.toggle('square')
        board[i].onclick = () => tic(board[i])
        board[i].onmouseover = () => {board[i].classList.toggle('hover')}
        board[i].onmouseleave = () => {board[i].classList.toggle('hover')}
        
    }

}