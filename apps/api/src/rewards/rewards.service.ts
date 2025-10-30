import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RewardsService {
  constructor(private prisma: PrismaService) {}

  async getRewardsForUser(userId: string) {
    if (!userId) {
      return { points: 0 };
    }
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    });
    if (!user) {
      return { points: 0 };
    }
    return { points: user.rewardsPoints };
  }
}
