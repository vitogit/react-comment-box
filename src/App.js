import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      commentId: 0
    };
  }
  handleOnSubmit(commentText) {
    let newCommentId = this.state.commentId + 1;
    this.setState({commentId: newCommentId});
    
    let comment = {id:this.state.commentId, author: 'me', text: commentText}
    this.setState({comments: this.state.comments.concat(comment)});
  }
  render() {
    return (
      <div className="App">
        <CommentList comments={this.state.comments}/>
        <CommentInput onCommentSubmit={this.handleOnSubmit.bind(this)}/>
      </div>
    );
  }
}

class CommentInput extends Component {
  handleOnSubmit(e) {
    let commentText = this.textInput.value;
    if (commentText) {
      this.props.onCommentSubmit(commentText);
      this.textInput.value = '';
    }
  }
  render() {
    return (
      <div className="CommentInput">
        <input ref={(ref) => this.textInput = ref} type="text"></input>
        <button onClick={this.handleOnSubmit.bind(this)}>Send</button>
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    let liComments = this.props.comments.map(function(comment) {
                       return <Comment key={comment.id} author={comment.author} text={comment.text}/>;
                     })
    return (
      <ul className="CommentList">
        {liComments}
      </ul>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <li key={this.props.id} className="Comment">
        {this.props.author}: {this.props.text}
      </li>
    );
  }
}

export default App;
