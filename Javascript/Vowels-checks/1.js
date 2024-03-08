function generateBoard(row, col) {
  //   console.log(arr);
  // console.log(arr[randomAbjad]);
  const board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      board[i].push(randomAbjad());
    }
  }
  return board;
}

function randomAbjad() {
  const abjad = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  const randomIndex = Math.floor(Math.random() * abjad.length);
  return abjad[randomIndex];
}

function getBlockFilledWithVowels(board) {
  // console.log(arr);
  // console.log(board);
  let result = 0;

  for (let i = 0; i < board.length - 1; i++) {
    // console.log(board[i]);
    for (let j = 0; j < board[i].length - 1; j++) {
      // console.log(board[i][j]);
      const block = [
        board[i][j],
        board[i][j + 1],
        board[i + 1][j],
        board[i + 1][j + 1],
      ];

      // console.log(isVowel(block));
      if (isVowel(block)) {
        result++;
      }
    }
  }

  return result;
}

function isVowel(arr) {
  return arr.every((x) => "AIUEO".includes(x));
}

const board = generateBoard(5, 4);
// console.log(board);
const result = getBlockFilledWithVowels(board);
console.log(result);
