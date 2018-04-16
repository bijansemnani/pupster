import React from "react";
import API from "../../../utils/API";
import "./Discover.css";

class Discover extends React.Component {
  state = {
    image : "",
    pupLove: 0,
    message: ""
  }

  componentDidMount(){
    this.searchImage(false);
  }

  searchImage = (bool) => {
      API.searchImage()
      .then(res => {
        if(bool){
          this.setState({
          image:res.data.message,
          pupLove: this.state.pupLove + 1,
          message: "The Pup Liked You back"
        });
        }
        else {
          this.setState({
            image:res.data.message,
            message: ""
          });
        }
      })
      .catch(err => console.log(err));
  }

  newImage = (bool) => {
    if (bool) {
      let x = Math.floor(Math.random()*5);
      if(1 === x){
        this.searchImage(true);
      } else {
        this.searchImage(false);
      }
    }
    else {
      this.searchImage(false);
    }
  };

  render(){
    console.log(this.state.pupLove);
    return (
      <div>
        <div className="tinder" style={{backgroundImage: `url(${this.state.image})`}}>
          <button onClick={()=> this.newImage(true)}>Like</button>
          <button onClick={()=> this.newImage(false)}>Dislike</button>
        </div>
        <h2>{this.state.message}</h2>
      </div>

    );
  }
}
export default Discover;
