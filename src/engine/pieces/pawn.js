import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        if (this.player === Player.WHITE) {
            if (location.row === 1) {
                if (board.getPiece(Square.at(location.row + 2, location.col)) === undefined
                    && board.getPiece(Square.at(location.row + 1, location.col)) === undefined) {
                    moves.push(Square.at(location.row + 2, location.col))
                }
                else if (board.getPiece(Square.at(location.row + 2, location.col)).player === Player.BLACK
                    || board.getPiece(Square.at(location.row + 1, location.col)) === Player.BLACK
                    && board.getPiece(Square.at(location.row + 2, location.col)) instanceof King === false
                    && board.getPiece(Square.at(location.row + 1, location.col)) instanceof King === false) {
                    moves.push(Square.at(location.row + 2, location.col))
                }
            }
            if (location.row !== 7) {
                if (board.getPiece(Square.at(location.row + 1, location.col)) === undefined) {
                    moves.push(Square.at(location.row + 1, location.col))
                }
                else if (board.getPiece(Square.at(location.row + 1, location.col)).player === Player.BLACK
                    && board.getPiece(Square.at(location.row + 1, location.col)) instanceof King === false
                ) {
                    moves.push(Square.at(location.row + 1, location.col))
                }
                if (board.getPiece(Square.at(location.row + 1, location.col + 1)) &&
                    board.getPiece(Square.at(location.row + 1, location.col + 1)).player === Player.BLACK) {
                    moves.push(Square.at(location.row + 1, location.col + 1))
                }
                else if (board.getPiece(Square.at(location.row + 1, location.col - 1)) &&
                    board.getPiece(Square.at(location.row + 1, location.col - 1)).player === Player.BLACK) {
                    moves.push(Square.at(location.row + 1, location.col - 1))
                }
            }

        } else {
            if (location.row === 6) {
                if (board.getPiece(Square.at(location.row - 2, location.col)) === undefined && board.getPiece(Square.at(location.row - 1, location.col)) === undefined) {
                    moves.push(Square.at(location.row - 2, location.col))
                }
                else if (board.getPiece(Square.at(location.row - 2, location.col)).player === Player.WHITE
                    || board.getPiece(Square.at(location.row - 1, location.col)) === Player.WHITE
                    && board.getPiece(Square.at(location.row - 2, location.col)) instanceof King === false
                    && board.getPiece(Square.at(location.row - 1, location.col)) instanceof King === false) {
                    moves.push(Square.at(location.row - 2, location.col))
                }
            }
            if (location.row !== 0) {
                if (board.getPiece(Square.at(location.row - 1, location.col)) === undefined) {
                    moves.push(Square.at(location.row - 1, location.col))
                }
                else if (board.getPiece(Square.at(location.row - 1, location.col)).player === Player.WHITE
                    && board.getPiece(Square.at(location.row - 1, location.col)) instanceof King === false
                ) {
                    moves.push(Square.at(location.row - 1, location.col))
                }

                if (board.getPiece(Square.at(location.row - 1, location.col + 1)) &&
                    board.getPiece(Square.at(location.row - 1, location.col + 1)).player === Player.BLACK) {
                    moves.push(Square.at(location.row - 1, location.col + 1))
                }
                else if (board.getPiece(Square.at(location.row - 1, location.col - 1)) &&
                    board.getPiece(Square.at(location.row - 1, location.col - 1)).player === Player.BLACK) {
                    moves.push(Square.at(location.row - 1, location.col - 1))
                }
            }
        }
        return moves
    }
}

