import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndusers } from "../actions";
import UserHeader from "./UserHeader";

class PostsList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndusers();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="description">
              <h2 id="item-header">{post.title}</h2>
              <p id="item-body">{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list" id="item-container">
        <h3 id="title">Anusha's Blog</h3>
        <p className="built-with">
          Built with React, Redux, Semantic UI, and some plain old CSS.
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
