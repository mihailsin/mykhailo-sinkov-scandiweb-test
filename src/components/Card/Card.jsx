import React from "react";

class Card extends React.Component {
  render() {
    return (
      <li>
        <div>
          <img
            src={`https://via.placeholder.com/280x420.png?text=Image+Not+Available`}
            alt=""
          />
          <p>Description</p>
          <p>Price</p>
        </div>
      </li>
    );
  }
}

export default Card;
