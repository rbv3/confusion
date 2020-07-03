import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }

  render() {
    const menu = this.props.dishes.map((d) => {
      return (
        <div key={d.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(d)}>
            <CardImg width="100%" object src={d.image} alt={d.name} />
            <CardImgOverlay>
              <CardTitle>{d.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
