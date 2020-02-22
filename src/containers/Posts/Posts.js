import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../../store/actions";
import {Card, CardBody} from "reactstrap";
import PostThumbnail from "../../components/Product/PostThumbnail";
import {Link} from "react-router-dom";


class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    return this.props.posts.map(post => (
      <Card key={post.id} style={{marginBottom: '10px'}}>
        <CardBody>
          <PostThumbnail image={post.image} />
          <p>{post.title}</p>
          <p>
            {post.published_at}
            <Link to={'/posts/' + post.id}>Read full post >> </Link>
          </p>
        </CardBody>
      </Card>
    ));
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
