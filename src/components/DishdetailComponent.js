import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
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

function RenderComments({ dish }) {
  if (dish != null) {
    return (
      <div>
        <h4>
          <strong>Comments</strong>
        </h4>
        <ul className="list-unstyled">
          <li>
            <p>{dish.comments[0].comment}</p>
            <p>
              --{dish.comments[0].author},
              {dish.comments[0].date.substring(0, 10)}
            </p>
          </li>
          <li>
            <p>{dish.comments[1].comment}</p>
            <p>
              --{dish.comments[1].author},
              {dish.comments[1].date.substring(0, 10)}
            </p>
          </li>
          <li>
            <p>{dish.comments[2].comment}</p>
            <p>
              --{dish.comments[2].author},
              {dish.comments[2].date.substring(0, 10)}
            </p>
          </li>
          <li>
            <p>{dish.comments[3].comment}</p>
            <p>
              --{dish.comments[3].author},
              {dish.comments[3].date.substring(0, 10)}
            </p>
          </li>
          <li>
            <p>{dish.comments[4].comment}</p>
            <p>
              --{dish.comments[4].author},
              {dish.comments[4].date.substring(0, 10)}
            </p>
          </li>
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  console.log("DishDetail Component render is invoked");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
