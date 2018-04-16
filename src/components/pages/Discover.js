import React from "react";
import API from "../../utils/API";

class Discover extends React.Component {
  state = {
    image : ""
  }

  componentDidMount(){
    this.searchImage();
  }

  searchImage = () => {
    API.searchImage()
    .then(res => this.setState({image:res.data.message}))
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <img src={this.state.image} alt="this a dog"/>
      </div>
    );
  }
}
export default Discover;
