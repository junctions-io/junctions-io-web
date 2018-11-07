import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const position = [43.1566, -77.6088]; // 43.1566° N, 77.6088° W
        return (
            <div className="App-outer">
                <div className="App-inner">
                    <h1>Frightful Junctions</h1>
                    <p>Comment on your least favorite intersections in the City of Rochester.</p>
                    <Map center={position} zoom={13}>
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Booyeah.
                            </Popup>
                        </Marker>
                    </Map>
                </div>
            </div>
        );
    }
}

export default App;
