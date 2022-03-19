import React from "react";
import Gallery from "../../components/Gallery";
import Card from "../../components/Card";

class CategoryView extends React.Component {
  render() {
    return (
      <Gallery>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Gallery>
    );
  }
}

export default CategoryView;
