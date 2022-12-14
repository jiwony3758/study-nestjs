import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDTO } from './dto/create-board-dto';

@Injectable()
export class BoardsService {
    private boards: Array<Board> = [];

    getAllBoards(): Array<Board> {
        return this.boards;
    }

    createBoard(createBoardDTO: CreateBoardDTO) {
        const { title, description } = createBoardDTO;
        const board: Board = {
            id: uuid(),
            title, 
            description,
            status: BoardStatus.PUBLIC,
        }
        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find(board => board.id === id);
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter( board => board.id !== id );
    }

    updateBoardStatus(id: string, status: BoardStatus): Board{
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
