import React from "react";
import Header from "./header.jsx";

class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  };
  render () {
    return (
      <div>
        <Header />
      </div>
    );
  };
}
export default Page;
