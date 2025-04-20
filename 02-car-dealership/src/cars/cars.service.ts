import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = []

    public findAll(): Car[] {
        return [...this.cars];
    }

    public findOneById(id: string): Car {
        const car =  this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }

    public create(createCarDTO: CreateCarDTO) {
        const newCar: Car = { id: uuid(), ...createCarDTO };
        this.cars.push(newCar)
        return newCar;
    }

    public update(id: string, updateCarDTO: UpdateCarDTO) {

        let carDB: Car = this.findOneById(id);

        if (updateCarDTO.id && updateCarDTO.id !== id) {
            throw new BadRequestException('Car id is not valid inside body')
        }

        this.cars = this.cars.map(car => {    
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDTO, id }
                return carDB;
            }
            return car;
        })

        return carDB
    }

    public delete(id: string) {
        this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }
} 
