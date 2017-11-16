import React from 'react';
import {Howl} from 'howler';
import classNames from 'classnames/bind';

class SoundComponent extends React.Component {
	constructor(props) {
		super(props);

		let sound = new Howl({
			urls: [props.file],
			onload: this.loaded.bind(this),
			onend: this.done.bind(this)
		});

		this.state = {
			sound: sound,
			isPlaying: false,
			isLoaded: false
		};

		var {no} = this.props;
		no = parseInt(no);

		if (no && no < 10) {
			window.addEventListener('keydown', (e) => {
				if (e.which - 48 === no) {
					e.preventDefault();
					this.play();
				}
			});
		}
	}

	render() {
		var icon = this.state.isPlaying ? 'stop' : 'play_arrow' ;
		var classes = classNames('sound btn-floating btn-large waves-effect waves-light red', {
			'is-playing': this.state.isPlaying,
			'is-loaded': this.state.isLoaded
		});

		return (
			<div className="sound-container col s6 m4">
				<a className={classes} onClick={this.play.bind(this)}>
					<i className="icon-play material-icons">{icon}</i>
				</a>

				<span className="sound-label">{this.props.label}</span>
			</div>
		);
	}

	play() {
		if (this.state.isPlaying) {
			this.state.sound.stop();
			this.setState({isPlaying: false});
		} else {
			this.state.sound.play();
			this.setState({isPlaying: true});
		}
	}

	done() {
		this.setState({isPlaying: false});
	}

	loaded() {
		this.setState({isLoaded: true});
	}
}

export default SoundComponent;
