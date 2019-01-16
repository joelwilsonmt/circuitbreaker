import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import {GameContext} from "../Contexts/GameContext";


export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      location: ''
    }
  };
  componentWillMount() {
    console.log("Getting user location");
    if (navigator.geolocation) {
      console.log("Navigator has geolocation");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("position and all that: ", position);
        this.setState({
          location:position,
          disableSubmit: false
        });

        console.log(this.state.location);
      },
    (err) => {
      console.log("error", err);
    }, {enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0});
    } else {
      console.error("Browser does not support Geolocation");
    }
  }
  onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

  render() {
    const style = {
      flex: 1,
      width: '100vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    const styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -30
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#353535"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#656565"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#505050"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#454545"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -40
            },
            {
                "invert_lightness": true
            },
            {
                "gamma": 1.5
            }
        ]
    }
]
    const mapCenterLat = (this.props.value.user.user_session_boundary.here_api_format[1] + this.props.value.user.user_session_boundary.here_api_format[3]) / 2;
    const mapCenterLng = (this.props.value.user.user_session_boundary.here_api_format[0] + this.props.value.user.user_session_boundary.here_api_format[2]) / 2;
    return (
      <div className="map-wrapper">
      <Map
        className={"challengeMap"}
        item
        xs = { 12 }
        style = { style }
        styles = { styles }
        google = { this.props.google }
        onClick = { this.onMapClicked }
        zoom = { 12 }
        initialCenter = {{
          lat: mapCenterLat,
          lng: mapCenterLng
        }}
      >
        {(this.state.location !== '')
          ?

          <Marker
            onClick={this.onMarkerClick}
            key={11}
            title = {"Your Location"}
            name = {"Your Location"}
            className="your-location"
            position = {
              {
                lat:this.state.location.coords.latitude,
                lng:this.state.location.coords.longitude
              }
            }
            icon={{
              url: "https://media.giphy.com/media/znPmkQy6WnT20/giphy.gif",
              scaledSize: new this.props.google.maps.Size(50,50)
            }}
          />

          :

          null}
      {this.props.value.circuit.challenges.map((challenge, i) => {
          return <Marker
                    onClick={this.onMarkerClick}
                    key={i}
                    title = {challenge.location_gate.name}
                    position = {
                      {
                        lat:challenge.location_gate.position[0],
                        lng:challenge.location_gate.position[1]
                      }
                    }
                    name = {challenge.location_gate.name}
                    address = {challenge.location_gate.address.replace(/<br\s*\/?>/gi, '. ')}
                    challengeText = {challenge.full_challenge_text}
                  />
        })}
        {this.props.value.circuit.challenges.map((challenge, i) => {
            return <InfoWindow
                    key={"info" + i}
                    className="black-bg"
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                      <div >
                        <h1>{this.state.selectedPlace.challengeText}</h1>
                        <h2>{this.state.selectedPlace.name}</h2>
                        <h2>{this.state.selectedPlace.address ? <h2>Address: {this.state.selectedPlace.address}</h2> : ''}</h2>
                      </div>
                  </InfoWindow>
          })}
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD81lHDGkpb3CORrbtfarHe44zpXnKtJu8')
})(MapContainer)
