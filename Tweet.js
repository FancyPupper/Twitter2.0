import React, { Component } from 'react';
import './App.css';

class Tweet extends Component {
	render(){
		//console.log(this.props.obj);
		const {user_name, avatar, description, created_at } = this.props.obj;
		//console.log(description + created_at)
		return(
			<li className="tweet" key={this.props.obj.id}>
				<div className="tweet-header">
					<img className="img-profile" alt={user_name} src={avatar} />
					<h1 className="username">
						{user_name}
					</h1>
					<span className="timestamp">
						{created_at}
					</span>
				</div>
				<div className="tweet-body">
					<p className="tweet-text">
						{description}
					</p>
				</div>		
			</li>
		)
	}
}

export default Tweet;