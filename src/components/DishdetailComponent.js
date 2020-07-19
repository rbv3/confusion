import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label
} from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val?.length <= len);
const minLength = (len) => (val) => val && (val?.length >= len);

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  var c;
  if (comments) {
    c = comments.map((x) => {
      return (
        <ul key={x.id} className="list-unstyled">
          <li>{x.comment}</li>
          <li>
            --{x.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(x.date)))}
          </li>
        </ul>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <div>{c}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }
  render() {
    return (
      <>
        <Button
          onClick={this.toggleModal}
          outline
          type="submit"
          value="submit"
          color="secondary"
        >
          <span className="fa fa-pencil fa-lg"></span>
          {' '}
        Submit Comment
      </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={{ size: 12 }}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                  </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={12}>
                  Comment
                  </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    row="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 12 }}>
                  <Button type="submit" color="primary">
                    Submit
                    </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            {props.dish.name}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
          <CommentForm
            addComment={props.addComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    </div>
  );
};
export default DishDetail;
