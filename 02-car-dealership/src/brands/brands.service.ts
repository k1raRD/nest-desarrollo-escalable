import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  public findAll() {
    return this.brands;
  }

  public findOne(id: string) {

    const brand = this.brands.find(brand => brand.id === id)

    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);

    return brand;
  }

  public create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }

    this.brands.push(brand);

    return brand;
  }

  public update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let brandDB = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id ) {
        brandDB = { ...brandDB, ...updateBrandDto, updatedAt: new Date().getTime() };
        return brandDB
      }
      return brand;
    })

    return brandDB;
  }

  public remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  public fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
}
}
