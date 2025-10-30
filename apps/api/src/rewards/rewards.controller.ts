import { Controller, Get, Query } from '@nestjs/common';
import { RewardsService } from './rewards.service';

@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  // GET /rewards/me?userId=...
  @Get('me')
  async getMyRewards(@Query('userId') userId: string) {
    // in real life you would use auth, but for now we pass userId in query
    return this.rewardsService.getRewardsForUser(userId);
  }
}
