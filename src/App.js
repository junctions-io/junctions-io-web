import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import logo from './logo.svg';
import './App.css';

const coords = [{
    "id": 0,
    "coordinates": [43.1566, -77.61],
    "intersection": "E Main St, East Ave, and Franklin St",
    "thumbs_up": 5,
    "thumbs_dn": 4,
},{
    "id": 1,
    "coordinates": [43.17, -77.6088],
    "intersection":"E Main St and Clinton Ave",
    "thumbs_up": 5,
    "thumbs_dn": 4
}];

const comments = [{
    "name": "Bob",
    "emotion": "\u{1F44E}",
    "text": "This intersection is dumb."
}, {
    "name": "Bob's Brother",
    "emotion": "\u{1F44D}",
    "text": "I'm a car driver, and this intersection is amazing."
}];

class Info extends Component {
    render() {
        const {coord, comments} = this.props;
        return (
            <div className="App-info">
                <h3 className="App-info-heading">Intersection of {coord.intersection}</h3>
                <span className="App-info-emotion">{coord.thumbs_up} &#128077;</span>
                <span className="App-info-emotion">{coord.thumbs_dn} &#128078;</span>
                <div className="App-info-comment-container">
                    {comments.map(comment => {
                        return (
                            <div className="App-info-comment">
                                <span>{comment.emotion}</span>&nbsp;<b>{comment.name}</b> says: {comment.text}
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {coordinates: coords};
    }

    render() {
        const rochester = [43.1566, -77.6088]; // 43.1566° N, 77.6088° W
        const {coordinates} = this.state;
        const info = <Info coord={coords[0]} comments={comments} />;
        return (
            <div className="App-outer">
                <div className="App-inner">
                    <h1>Frightful Junctions</h1>
                    <p>Comment on your least favorite intersections in the City of Rochester.</p>
                    <Map center={rochester} zoom={13}>
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {coordinates.map(coord => {
                            return (
                                <Marker position={coord.coordinates}>
                                    <Popup>
                                        {coord.intersection}
                                    </Popup>
                                </Marker>
                            );
                        })}
                    </Map>
                    {info}
                </div>
            </div>
        );
    }
}

export default App;
