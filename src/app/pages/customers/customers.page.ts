import { Component, OnInit } from '@angular/core';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
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
    this.triphistory = (this.chatService.getRiders())

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
