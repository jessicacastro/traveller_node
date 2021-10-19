import prismaClient from '../prisma';
import bcrypt from 'bcrypt';

import { sign } from 'jsonwebtoken';

class AuthenticateUserService {
  async execute(email: string, password: string) {
    let user = await prismaClient.user.findFirst({ where: { email }})
    
    if (!user) throw new Error("User not found!");

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw new Error("Information is incorrect!");

    const token = sign(
      {
        user: {
          name: user.name,
          id: user.id
        }
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "7d"
      }
    );

    return { token, user };
  }
}

export { AuthenticateUserService }