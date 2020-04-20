import React, { Component } from 'react';

class GetTracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            id: ''
        };
    };

    getTracks = () => {
        fetch('http://localhost:5500/api/tracks')
            .then(response => response.json())
            .then(data => this.setState({tracks: data}));
    };

    componentDidMount() {
        this.getTracks();
    };

    render() {
        const DisplayTracks = this.state.tracks.map(track => {
            return (
                <div>
                    <ul>
                        <li>
                            {track._id}<br /><br />
                            Title: <b>{track.track_title}</b><br />
                            Artist: {track.artist}<br />
                            Album: {track.album}<br />
                            Genre: {track.genre}<br />
                            Year Released: {track.year_released}<br />
                            Function: {track.description}<br /><br /><br />
                        </li>
                    </ul>
                </div>
            );
        });

        return (
            <div>
                {DisplayTracks}
                <div>
                    <button onClick={this.getTracks}>Refresh Database</button>
                </div>
            </div>
        );
    };
};

export default GetTracks;