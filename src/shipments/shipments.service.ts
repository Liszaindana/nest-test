import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto.js';
import { UpdateShipmentDto } from './dto/update-shipment.dto.js';

@Injectable()
export class ShipmentsService {
  create(createShipmentDto: CreateShipmentDto) {
    return 'This action adds a new shipment';
  }

  findAll() {
    return `This action returns all shipments`;
  }

  findOne(id: string) {
    return `This action returns a #${id} shipment`;
  }

  update(id: string, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: string) {
    return `This action removes a #${id} shipment`;
  }
}
