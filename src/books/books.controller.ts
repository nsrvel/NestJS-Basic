import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto ';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  // @UsePipes(ValidationPipe)
  async createBook(@Body() payload: CreateBookDto): Promise<void> {
    console.log(payload);
    return this.booksService.createBook(payload);
  }

  @Get()
  // @UsePipes(ValidationPipe)
  async getBooks(@Query() filter: FilterBookDto): Promise<Book[]> {
    return this.booksService.getBooks(filter);
  }

  // @Get('/:id')
  // getBook(@Param('id') id: string) {
  //   return this.booksService.getBook(id);
  // }

  // @Put('/:id')
  // @UsePipes(ValidationPipe)
  // updateBook(@Param('id') id: string, @Body() payload: UpdateBookDto) {
  //   return this.booksService.updateBook(id, payload);
  // }

  // @Delete('/:id')
  // deleteBook(@Param('id') id: string) {
  //   return this.booksService.deleteBook(id);
  // }
}
