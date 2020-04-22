import React, { Component } from 'react';

class AddTrack extends Component {
    constructor(props) {
        super(props);

        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeArtist = this.onChangeArtist.bind(this);
        // this.onChangeAlbum = this.onChangeAlbum.bind(this);
        // this.onChangeGenre = this.onChangeGenre.bind(this);
        // this.onChangeYear = this.onChangeYear.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            track_title: '',
            artist: '',
            album: '',
            genre: '',
            year_released: '',
            description: ''
        };
    };

    onChangeTitle = (e) => {
        this.setState({ track_title: e.target.value });
    };

    onChangeArtist = (e) => {
        this.setState({ artist: e.target.value });
    };

    onChangeAlbum = (e) => {
        this.setState({ album: e.target.value });
    };

    onChangeGenre = (e) => {
        this.setState({ genre: e.target.value });
    };

    onChangeYear = (e) => {
        this.setState({ year_released: e.target.value });
    };

    onChangeDescription = (e) => {
        this.setState({ description: e.target.value });
    };

    onSubmit = async(e) => {
        e.preventDefault();

        console.log("Form Submitted");
        console.log(`Title: ${this.state.track_title}`);
        console.log(`Artist: ${this.state.artist}`);
        console.log(`Album: ${this.state.album}`);
        console.log(`Year Released: ${this.state.year_released}`);
        console.log(`Description: ${this.state.description}`);

        const url = process.env.REACT_APP_API_URL;
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([this.state])
        }).then(() => {
            this.setState({
                track_title: '',
                artist: '',
                album: '',
                genre: '',
                year_released: '',
                description: ''
            });
        }).catch(err =>err);

        window.location.reload(false);
    };

    render() {
        return (
            <div className="addTrackContainer">
                <form className="formGroup" onSubmit={this.onSubmit}>
                    <div className="title">
                        <label className="titleLabel">Title: </label>
                        <input type="text" className="titleField" 
                        placeholder="Title" onChange={this.onChangeTitle}/>
                    </div>
                    <div className="artist">
                        <label className="artistLabel">Artist: </label>
                        <input type="text" className="artistField"
                        placeholder="Artist" onChange={this.onChangeArtist}/>
                    </div>
                    <div className="album">
                        <label className="albumLabel">Album: </label>
                        <input type="text" className="albumField"
                        placeholder="Album" onChange={this.onChangeAlbum}/>
                    </div>
                    <div className="genre">
                        <label className="genreLabel">Genre: </label>
                        <input type="text" className="genreField"
                        placeholder="Genre" onChange={this.onChangeGenre}/>
                    </div>
                    <div className="year_released">
                        <label className="yearLabel">Year Released: </label>
                        <input type="number" min="0" max="2050" className="yearField"
                        placeholder="Year" onChange={this.onChangeYear}/>
                    </div>
                    <div className="description">
                        <label className="descriptionLabel">Description: </label>
                        <input type="text" className="descriptionField"
                        placeholder="Description" onChange={this.onChangeDescription}/>
                    </div><br/>
                    <div className="submitButton">
                        <input type="submit" id="submitButton" value="Add To The List"/>
                    </div>
                </form>
            </div>
        );
    };
};

export default AddTrack;