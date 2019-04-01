import React, { Component } from 'react';
import Tweet from './Tweet.js'
import './App.css';

class Feed extends Component{
	render(){
		return(
			<ul className="feed">
				{!this.props.isLoaded && <div className="load">
					Loading...
				</div>}

				{
				//	console.log(this.props.tweets)}{
					this.props.tweets.map((tweet) => (
						<Tweet
							key={tweet.id}
							obj={tweet}
						/>
					))
				}
			</ul>
		)
	}
}

export default Feed;