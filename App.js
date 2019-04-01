import React, { Component, Fragment } from 'react';
import TweetBox from './TweetBox.js';
import Feed from './Feed.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweets: [],
      isLoaded: true,
      error: null
    }
  }

  componentDidMount(){
    fetch("https://still-garden-88285.herokuapp.com/draft_tweets")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result.draft_tweets);
          this.setState({
            isLoaded: true,
            tweets: result.draft_tweets
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  handleSubmit = (user, avatar, tweetText) => {

    let newTweet = {
      user_name: user,
      avatar: avatar,
      description: tweetText,
    }

    console.log(newTweet);

    let headers = {};
    headers['Content-Type'] = 'application/json';

    const options = {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(newTweet)
    }

    fetch("https://still-garden-88285.herokuapp.com/draft_tweets", options)
    .then(response => response.json())
    .then(
        (result) => {
          console.log(newTweet);
          let tweets = this.state.tweets.slice();
          this.setState({
            isLoaded: true,
            tweets: tweets.concat(newTweet)
          })
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error: error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, tweets } = this.state;
    let content;

    if (error) {
      content = <div>Error: {error.message}</div>;
    } else {
      return (
        content = (
          <Fragment className="twitter">
            <TweetBox
              handleSubmit={this.handleSubmit}
            />
            <Feed 
              tweets={tweets}
              isLoaded={isLoaded}
            />
          </Fragment>
        )
      );
    }

    return (
      <div className="app">
        { content }
      </div>
    )
  }
}

export default App;
