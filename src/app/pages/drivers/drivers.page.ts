import { Component, OnInit } from '@angular/core';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {
  skeletOns: {}[];
  hideSkeleton: boolean;
  triphistory: any;
  hasNoData: boolean;

  constructor(private chatService: AvatarService) { }


  async ionViewDidEnter() {
    this.skeletOns = [
      {},{},{},{}
    ]

    this.hideSkeleton = true;
    this.triphistory = (this.chatService.getDrivers())

    this.triphistory.subscribe((d)=>{
      console.log(d);
      if (d.length == 0){
        this.hasNoData = true;
        this.hideSkeleton = false;
      }else{
        this.hideSkeleton = false;
        this.hasNoData = false;
      }
  })

  }

  ngOnInit() {
  }

}
