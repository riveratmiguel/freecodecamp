let Player = {
    marker: '',
    score: 0,
    winsTotal: 0
};
let origBoard = ['O', 1, 'X', 'X', 4, 'X', 6, 'O', 'O'];
// Possible winning combinations
const threeAcross = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const threeDown = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const threeDiagonal = [[0, 4, 8], [2, 4, 6]];
let human = Object.create(Player);
human.marker = 'O';
let ai = Object.create(Player);
ai.marker = "X";
// TODO: Build this function out
function miniMax(newBoard, player) {
}
function emptyIndices(board) {
    return board.filter(s => typeof (s) == 'number');
}
function winningCombo(board, player) {
    if (threeAcross || threeDown || threeDiagonal && player.marker) {
        return true;
    }
    else {
        return false;
    }
}
