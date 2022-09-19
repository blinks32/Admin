import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  skeletOns: {}[];
  hideSkeleton: boolean;
  triphistory: any;
  hasNoData: boolean;

  constructor(private nav: NavController, private chatService: AvatarService) { }


  async ionViewDidEnter() {
    this.skeletOns = [
      {},{},{},{}
    ]

    this.hideSkeleton = true;
    this.triphistory = (this.chatService.getTrips())

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

  goBack(){
    this.nav.pop();
  }
}
