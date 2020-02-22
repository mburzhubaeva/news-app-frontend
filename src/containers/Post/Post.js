import React, {Component} from 'react';
import {fetchComments, fetchPost} from "../../store/actions";
import {connect} from 'react-redux';
import {Card, CardBody, Col, Row} from "reactstrap";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }


  render () {
    if (this.props.post) return null;

    return (
      <Row>
        <Col sm={12}>

          <h2>{this.props.post.title}</h2>
          <p>
            {this.props.post.fulltext}
          </p>
          <h2>Comments</h2>
          {this.props.comments.map(comment => (
            <Card key={comment.id}>
              <CardBody>
                <p>{comment.author || 'Anonymous'} said:</p>
                <p>{comment.text}</p>
              </CardBody>
            </Card>
          ))}
          <h2>Post new comment</h2>
          <form>

          </form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchPost: () => dispatch(fetchPost(id)),
  fetchComments: id => dispatch(fetchComments(id))
});


export default connect(mapStateToProps, mapDispatchToProps) (Post);