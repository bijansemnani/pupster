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
<<<<<<< HEAD
        <img src={this.state.image} alt="this a dog"/>
=======
        <h1>Discover</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
          ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
          quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
          diam, sit amet facilisis lectus blandit at.
        </p>
>>>>>>> about
      </div>
    );
  }
}
export default Discover;
