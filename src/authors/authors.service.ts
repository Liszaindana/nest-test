import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto.js';
import { UpdateAuthorDto } from './dto/update-author.dto.js';

@Injectable()
export class AuthorsService {
  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: string) {
    return `This action returns a #${id} author`;
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: string) {
    return `This action removes a #${id} author`;
  }
}
