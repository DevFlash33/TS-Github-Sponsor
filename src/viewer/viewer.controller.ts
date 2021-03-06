import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Sponsorship } from 'src/model/sponsor';
import { ViewerService } from './viewer.service';

@Controller('viewer')
export class ViewerController {
  constructor(private viewerService: ViewerService) {}
  @Get('sponsor/by')
  isSponsoredBy(@Query('login') login: string): Observable<boolean> {
    return this.viewerService.isSponsoredBy(login);
  }

  @Get('sponsor/to')
  isSponsoringTo(@Query('login') login: string): Observable<boolean> {
    return this.viewerService.isSponsoring(login);
  }

  @Get('sponsor/all')
  async getAllSponsors(): Promise<Sponsorship[]> {
    return await this.viewerService.getAllSponsors();
  }

  @Get('sponsor/token')
  getSponsor(@Query('token') token: string): Observable<Sponsorship> {
    return this.viewerService.getSponsorByToken(token);
  }

  @Get('sponsor/login')
  getSponsorByName(@Query('login') login: string): Observable<Sponsorship> {
    return this.viewerService.getSponsor(login);
  }
}
