import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Position } from '@capacitor/geolocation';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { OverlayService } from '../services/overlay.service';
import { GeocodeService } from '../services/geocode.service';
import { MapService } from '../services/map.service';
// import { Marker } from '@capacitor/google-maps';
import { AvatarService } from '../services/avatar.service';
import { Drivers } from '../interfaces/drivers';

import { Observable } from 'rxjs';
import { doc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { Marker } from '@capacitor/google-maps';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  profile = null;
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  mappy; 
  @ViewChild('mapElement') mapElement:  ElementRef<HTMLElement>;
  address: any = 'Unknown';
  bookingStage: any;
  confirmStage: any;
  trackingStage: any;
  drivingToDestinationStage: any;
  data: any;
  cash: any = false;
  state: any = [];
  mapPinStage: boolean;
  D_LatLng: { lat: any; lng: any; };
  mapPinDrag: any;
  showResetLocationButton: any = false;
  showloader: boolean;
  mapClass: any;
  destinationAddress: string = 'Drag To Pick Destination';
  locationAddress: string = 'Loading...';
  distance: any;
  direction: any;
  actualDestination: any;
  markers: any;
  allDrivers: Observable<Drivers[]>;
  NoDrivers: boolean;
  driverMarker: string;
  driver_duration_apart: number;
  driver_number_of_seats: any;
  price: any = 0;
  carname: any;
  driver_ID: any;
  bounds: any;
  DriverLatLng: { lat: any; lng: any; };
  driver_marker: any;
  drivers_Requested: any[];
  current_Request_Number: number = -1;
  Driver_Rejected: any;
  numCalls: any;
  currentDriver: any;
  unsubscribe: import("@angular/fire/firestore").Unsubscribe;
  driverInfo: import("@angular/fire/firestore").DocumentData;
  currentState: boolean;
  duration: any;
  riderCleared: any;
  updateDriverSubcription: any;
  canCheck: boolean;
  rider_marker: any;
  marker1: any;
  marker2: any;
  actualLocation: string;
  LatLng: { lat: number; lng: number; };
  mapy: boolean;
  AllCarMarkers: Marker[];
  _carmarkers: any[];
  cards: import("@angular/fire/firestore").DocumentData[];
  selected: any;
  selectedCard: any;
  closeDrivers: any;
  approve: boolean = true;

  canStart: any;
  countDown: any;
  riderLocation: any;
  riderDestination: any;
  acceptedState: boolean = false;
  distanceText: any;
  durationText: any;
  driverCleared: boolean;
  FCOUNT: boolean;
  riderInfo: import("@angular/fire/firestore").DocumentData;
  earnings: any;
  coordinates: Position;
  numDrivers: number;
  numRiders: number;


  constructor(private auth: Auth, public map: MapService, private firestore: Firestore, private readonly database: AvatarService, public nav: NavController) {}


  //start the scene
  async ngOnInit() {
   try{
    
this.database.getEarnings().subscribe(async (d)=>{
  this.earnings = d.Earnings;
})

//get all the list of cards
   this.database.getCards().subscribe(async (d)=>{
    this.cards = d
    this.approve = false;
   // await this.database.deleDriverFromRequest(this.database.profile.Driver_id)
    this.cards.forEach(element => {
     console.log(element);
      if (element.selected == true){
       this.selected = element
       this.selectedCard = element.name;
       console.log(this.selectedCard);
      }
    });
})


this.database.getDrivers().subscribe(async (d)=>{
  console.log(d.length);
  this.numDrivers = d.length;
})


this.database.getRiders().subscribe(async (d)=>{
  console.log(d.length);
  this.numRiders = d.length;
})





this.auth.onAuthStateChanged((user)=>{


 });


}catch(e){

}

  }


gotoDrivers(){
  this.nav.navigateRoot('tabs/drivers'); 
}

gotoRiders(){
  this.nav.navigateRoot('tabs/customers'); 
}

gotoProfile(){
  this.nav.navigateRoot('tabs/customers'); 
}


}
