window.onload = () => {
    var board = document.getElementById('board').children
    for(let i = 0; i<9; i++){
        board[i].id = 'box'+String(i)
        board[i].classList.toggle('square')
    }

}