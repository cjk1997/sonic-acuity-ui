import React, { Component } from 'react';
import AddTrack from './AddTrack';
import DeleteTrack from './DeleteTrack';

class GetTracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
        };
    };

    getTracks = () => {
        const url = process.env.REACT_APP_API_URL;
        console.log(url)
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => this.setState({ tracks: data }))
            .catch(err => err);
    };

    componentDidMount() {
        this.getTracks();
    };

    render() {
        const DisplayTracks = this.state.tracks.map(track => {
            return (
                <div key={track._id}>
                    <ul>
                        <li>
                            {track._id}<br /><br />
                            Title: <b>{track.track_title}</b><br />
                            Artist: {track.artist}<br />
                            Album: {track.album}<br />
                            Genre: {track.genre}<br />
                            Year Released: {track.year_released}<br />
                            Function: {track.description}<br /><br /><br />
                            <DeleteTrack id={track._id}/>
                        </li>
                    </ul>
                </div>
            );
        });

        return (
            <div>
                { DisplayTracks }
                <div>
                    <button onClick={this.getTracks}>Refresh Database</button><br/><br/>
                </div>
                <div className="addTrack">
                    <h3>Add to the collection:</h3>
                    <AddTrack/>
                </div>
            </div>
        );
    };
};

export default GetTracks;