import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
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
}
