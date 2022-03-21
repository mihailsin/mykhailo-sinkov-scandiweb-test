import React from "react";
import Gallery from "../../components/Gallery";
import Card from "../../components/Card";
import { Query } from "@apollo/client/react/components";
import queries from "../../queries";
import { connect } from "react-redux";

class CategoryView extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Gallery>
          <Query
            query={queries.PRODUCTS_BY_CATEGORY_QUERY}
            variables={{ cat: this.props.filter }}
          >
            {({ data, loading }) => {
              if (loading) return "loading...";
              return data.category.products.map(
                ({ name, brand, gallery }, idx) => {
                  return <Card key={idx} product={{ name, brand, gallery }} />;
                }
              );
            }}
          </Query>
        </Gallery>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ filter: state.userOptions.filter });

export default connect(mapStateToProps, null)(CategoryView);
