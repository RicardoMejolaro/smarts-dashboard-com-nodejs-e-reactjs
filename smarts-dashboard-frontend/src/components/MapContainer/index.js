import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '150px',
  height: '150px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map>
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: this.props.latitude,
            lng: this.props.longitude
          }
        }
        <Marker
          onClick={this.onMarkerClick}
          name={this.props.localName}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'Aqui sua API key'
})(MapContainer);