import React from 'react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAlSsRMiiAZ_zghHBuYAgBwh1EHP_Ry86s")

let defLat = 1.306172316736376,
  defLng = 103.77295970025496;
class App extends React.Component {

  state = {
    address: '',
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    }
  }

  componentDidMount() {
    Geocode.fromLatLng(defLat, defLng).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);

        this.setState( {
          address: (address) ? address :"",
          mapPosition: {
            lat: defLat,
            lng: defLng
          },
          markerPosition: {
            lat: defLat,
            lng: defLng
          },
        })
      }
    );

  }

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng)
      .then(response => {
        const address = response.results[0].formatted_address

        this.setState({
          address: (address) ? address : "",
          mapPosition: {
            lat: newLat,
            lng: newLng
          },
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
        })
      })
  }

  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
      >
        <Marker
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
          position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
        >
          <InfoWindow
            onClose={this.onInfoWindowClose}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
            </div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    ));

    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlSsRMiiAZ_zghHBuYAgBwh1EHP_Ry86s&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }

}

export default App;