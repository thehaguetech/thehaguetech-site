import dynamic from 'next/dynamic';
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

class Marker extends Component {
  render() {
    return (
      <div>
        <img src="/static/components/navigation/tht-logo.svg" />
      </div>
    )
  }
}

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.0792334,
      lng: 4.3418724
    },
    zoom: 14
  };

  render() {
    return (
      <div style={{ width: '100%', height: '476px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDq4VqDgO9x6HIO5kEYez4LiCKfbsKgLF8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
