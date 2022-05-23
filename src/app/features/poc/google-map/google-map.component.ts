import { Component, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  // initial center position for the map
  lat!: number;
  lng!: number;
  mapZoom: number = 7;
  markers: marker[] = [];
  showContentIndex!: number;
  private geoCoder: any;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getCurrentLocation();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      this.getAddress(this.lat, this.lng);
    });

  }
  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      console.log(results);
      console.log(status);
    });
  }
  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((res: any) => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
      this.markers.push({
        lat: this.lat,
        lng: this.lng,
        label: 'A',
        draggable: false
      })
      this.mapZoom = 14
    })
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: '*',
      draggable: false
    });
  }
  clickedMarker(label: any, index: number) {
    this.showContentIndex = index;
    console.log(`clicked the marker: ${label || index}`)
  }

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
}


