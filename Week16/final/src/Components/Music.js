import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './bg4.jpg'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Song{
    constructor(name){
        this.name = name;

    }
}

class SongService{
    static url = "https://6534847de1b6f4c59046c631.mockapi.io/Promineo_Tech_API/songs";

    static getAllSongs(){
        return $.get(this.url);
    }

    static getSong(id){
        return $.get(this.url + `/${id}`);
    }

    static addSong(song){
        return $.post(this.url, song);
    }

    static updateSong(song){
        return $.ajax({
            url: this.url + `/${song._id}`,
            dataType: 'json',
            data: JSON.stringify(song),
            contentType: `application/json`,
            type: 'PUT'
        })
    }

    static deleteSong(id){
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'Delete'
        });
    }
}

class DOMManager{
    static songs;

    static getAllSongs(){
        SongService.getAllSongs().then(songs => this.render(songs));
    }

    
    static addSong(name){
        SongService.addSong(new Song(name))
        .then(() => {
            return SongService.getAllSongs();
        })
        .then((songs) => this.render(songs));
    }
    static deleteSong(id){
        SongService.deleteSong(id)
            .then(() => {
                return SongService.getAllSongs();
            })
            .then((songs) => this.render(songs));
    }


    static render(songs){

        this.songs = songs;
		console.log(songs)
		$('#list').empty();
        for(let song of songs){          
			$('#list').prepend(
				`<div id="${song._id}" class="card">
                    <div class="card-header">
					<button id="playSongBtn" class="btn btn-primary"></button>
					<button id="deleteSongBtn" class="btn btn-danger" onclick="DOMManager.deleteSong('${song._id}')"></button>
                        <ListGroup.Item>${song.name}</ListGroup.Item>
                    </div>
                </div><br>`
			
            );
        }
    }
}

function buttonPress(){
	DOMManager.addSong($('#new-song-name').val());
	$('#new-song-name').val('');

}

DOMManager.getAllSongs();

export default function Music() {
	return (
		<div className="newSong">
			<h2 id="script">Discover</h2>
			<Form.Control type="search" placeholder="Song" id="new-song-name"/>

			<Button id="add-new-song"				
			className="btn btn-info"
			onClick={buttonPress}
			>Add to Library</Button>
			    <div id="list">
    			</div>
		</div>
  );
}