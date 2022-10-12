import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDTO } from './dto/create-board-dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    @Get('/')
    getAllBoards(): Array<Board>{
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardDTO: CreateBoardDTO,
        ): Board {
            return this.boardsService.createBoard(createBoardDTO);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoardById(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
