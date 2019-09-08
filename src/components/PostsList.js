import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndusers } from "../actions";

class PostsList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndusers();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <h2 className="item-header">{post.title}</h2>
            <p className="item-body">{post.body}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="item-container">
        <h3 className="title">Anusha's Blog</h3>
        <p className="built-with">
          Built with React, Redux, and some plain old CSS.
        </p>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndusers }
)(PostsList);
