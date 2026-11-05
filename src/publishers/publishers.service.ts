import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto.js';
import { UpdatePublisherDto } from './dto/update-publisher.dto.js';

@Injectable()
export class PublishersService {
  create(createPublisherDto: CreatePublisherDto) {
    return 'This action adds a new publisher';
  }

  findAll() {
    return `This action returns all publishers`;
  }

  findOne(id: string) {
    return `This action returns a #${id} publisher`;
  }

  update(id: string, updatePublisherDto: UpdatePublisherDto) {
    return `This action updates a #${id} publisher`;
  }

  remove(id: string) {
    return `This action removes a #${id} publisher`;
  }
}
