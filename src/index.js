import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import "./index.css";
import App from "./App";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const testQuery = gql`
  query ByCategory($cat: String!) {
    category(input: { title: $cat }) {
      name
      products {
        name
        brand
        gallery
      }
    }
  }
`;

// client
//   .query({ query: testQuery, variables: { cat: "tech" } })
//   .then((data) => console.log(data));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
