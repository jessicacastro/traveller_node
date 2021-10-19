import prismaClient from '../prisma';

class ListAccomodationsService {
  async execute() {
    const accomodations = await prismaClient.accommodation.findMany(
      { 
        take: 5
      }
    )

    return accomodations;
  }
}

export { ListAccomodationsService }