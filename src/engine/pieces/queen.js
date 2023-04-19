import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }
    // Queen can move any number of spaces horizontally or vertically or diagonally. 
    // (1,2) = 1st row, 2nd column (starting from 0 to 7)

    // Cannot move through friendly pieces
    // check if there's a piece between current position and desired position. 
    // Cannot move through opposing pieces
    // check if there's a piece between current position and desired position. 
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let rowCountRight = location.row + 1;
        let rowCountLeft = location.row - 1;
        for (let i = location.col + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(rowCountRight, i)) === undefined) {
                    moves.push(Square.at(rowCountRight, i))
                    rowCountRight++
                    if (rowCountRight === 8) { break }
            
            }
            else if (board.getPiece(Square.at(rowCountRight, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountRight, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountRight, i))
                break
            } else {
                break
            }
        }
         rowCountRight = location.row + 1;
         rowCountLeft = location.row - 1;
        for (let i = location.col + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(rowCountLeft, i)) === undefined) {
                    moves.push(Square.at(rowCountLeft, i))
                    rowCountLeft--
                    if (rowCountLeft === -1) { break }
                }
            
            else if (board.getPiece(Square.at(rowCountLeft, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountLeft, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountLeft, i))
                break
            } else {
                break
            }
        }
        rowCountRight = location.row + 1;
        rowCountLeft = location.row - 1;
        for (let i = location.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(rowCountRight, i)) === undefined) {
                    moves.push(Square.at(rowCountRight, i))
                    rowCountRight++
                    if (rowCountRight === 8) { break }
                }
            else if (board.getPiece(Square.at(rowCountRight, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountRight, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountRight, i))
                break
            } else {
                break
            }
        }
        rowCountRight = location.row + 1;
        rowCountLeft = location.row - 1;
        for (let i = location.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(rowCountLeft, i)) === undefined) {
                    moves.push(Square.at(rowCountLeft, i))
                    rowCountLeft--
                    if (rowCountLeft === -1) { break }
            }
            else if (board.getPiece(Square.at(rowCountLeft, i)) instanceof King === true) { break }
            else if (board.getPiece(Square.at(rowCountLeft, i)).player === Player.BLACK) {
                moves.push(Square.at(rowCountLeft, i))
                break
            } else {
                break
            }
        }
        for (let i = location.col + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(location.row, i)) === undefined) {
                moves.push(Square.at(location.row, i))
            } 
            else if (board.getPiece(Square.at(location.row, i)) instanceof King === true) 
            {break}
            else if (board.getPiece(Square.at(location.row, i)).player === Player.BLACK) {
                moves.push(Square.at(location.row, i)) 
                break  
            } else {
                break
            }
        }

        for (let i = location.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(location.row, i)) === undefined) {
                moves.push(Square.at(location.row, i))
            }  else if (board.getPiece(Square.at(location.row, i)) instanceof King === true) 
            {break}
            else if (board.getPiece(Square.at(location.row, i)).player === Player.BLACK) {
                moves.push(Square.at(location.row, i))
            break}
            else {
                break
            }
        }

        for (let i = location.row + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(i, location.col)) === undefined) {
                moves.push(Square.at(i, location.col))
            }     else if (board.getPiece(Square.at(i, location.col)) instanceof King === true) 
            {break}
            else if (board.getPiece(Square.at(i, location.col)).player === Player.BLACK) {
                moves.push(Square.at(i, location.col))
            break}
            else {
                break
            }
        }

        for (let i = location.row - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(i, location.col)) === undefined) {
                moves.push(Square.at(i, location.col))
            }     else if (board.getPiece(Square.at(i,location.col)) instanceof King === true) 
            {break}
            else if (board.getPiece(Square.at(i, location.col)).player === Player.BLACK) {
                moves.push(Square.at(i, location.col))
            break}
            else {
                break
            }
        }

        return moves;
    }
}
