import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderMenuItem({ d, onClick }) {
  return (
    <Card onClick={() => onClick(d.id)}>
      <CardImg width="100%" object src={d.image} alt={d.name} />
      <CardImgOverlay>
        <CardTitle>{d.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((d) => {
    return (
      <div key={d.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem d={d} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
