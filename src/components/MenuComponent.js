import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ d }) {
  return (
    <Card>
      <Link to={`/menu/${d.id}`}>
        <CardImg width="100%" object src={d.image} alt={d.name} />
        <CardImgOverlay>
          <CardTitle>{d.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((d) => {
    return (
      <div key={d.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem d={d} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Menu
          </BreadcrumbItem>
        </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
