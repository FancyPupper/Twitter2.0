import React, { Component } from 'react';
import './App.css';

class TweetBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			user: 'Ariana',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-dxdgYdeavJQAH3g1OfMfhLPXuPe0Btub0gUjIPuQdf6YNIYPGg',
			tweetText: ''
		}

	}

	handleSubmit = (event) => {
		event.preventDefault();
		let newTweet = this.state.tweetText;
		let user = this.state.user;
		let avatar = this.state.avatar;
		this.setState({ tweetText: '' });
		this.props.handleSubmit(user, avatar, newTweet);
	}

	handleChange = (event) => {
		this.setState({
			tweetText: event.target.value
		});
	}

	selectUser = (event) => {
		if(event.target.value === 'Ariana'){
			this.setState({
				user: event.target.value,
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuESk9DDPiVJo0B4-kVkSqpBzHQDDqeAnIhBHtXBwnJUH3B79'
			});
		} else if (event.target.value === 'Ricardo'){
			this.setState({
				user: event.target.value,
				avatar: 'https://www.24horas.cl/incoming/quasimodojpg-1708485/ALTERNATES/w1024h768/QuasiModo.jpg'
			});
		}
	}

	render(){
		return(
			<div className="user-card">
				<select onChange={this.selectUser}>
					<option value="Ariana">Ariana</option>
					<option value="Ricardo">Ricardo</option>	
				</select>
				<div className="user-img-box">
					<img className="img-profile" alt={this.state.username} src={this.state.avatar}/>
					<h1 className="user-profile">{this.state.user}</h1>
				</div>
				<form className="tweet-now" onSubmit={this.handleSubmit}>
					<input
         				value={this.state.tweetText}
          				placeholder={'What´s happening?'}
          				onChange={this.handleChange}
       				 />
       				 <button>Tweet</button>
      			</form>
			</div>
		);
	}
}

export default TweetBox;