import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

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

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.selectedDish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.selectedDish?.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
