import dynamic from 'next/dynamic';
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

class Marker extends Component {
  render() {
    return (
      <div>
        <img src="/static/components/map/tht-marker.svg" style={{
          marginLeft: '-34px',
          marginTop: '-100px',
          height: '100px'
        }} />
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
      <div className="Map" style={{ width: '100%', height: '476px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDq4VqDgO9x6HIO5kEYez4LiCKfbsKgLF8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={52.079144}
            lng={4.3418880}
            text="The Hague Tech"
          />
        </GoogleMapReact>
        <style jsx>{`
        .Map img {
          filter: grayscale(100%)
        }
        `}</style>
      </div>
    );
  }
}

export default Map;
