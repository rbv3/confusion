import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
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

  renderComments(comments) {
    var c;
    if (comments) {
      c = comments.map((x) => {
        return (
          <div key={x.id}>
            <div>{x.comment}</div>
            <div>
              --{x.author}, {x.date}
            </div>
          </div>
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

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.selectedDish?.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
