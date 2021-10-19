import prismaClient from '../prisma';

class ListCarsService {
  async execute() {
    const cars = await prismaClient.cars.findMany(
      { 
        take: 5
      }
    )

    return cars;
  }
}

export { ListCarsService }