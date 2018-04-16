import React from "react";
import API from "../../../utils/API";
<div>
  <h1>Search by Breed</h1>
  </div>

class SearchBar extends React.Component {
  state = {
    search: ""
  }

  handleInputChange = event => {
    let value = event.target.value;
    this.setState({
      search: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    API.search(this.state.search)
    .then(res => {
      console.log(res.data.message)
      this.setState({
        images: res.data.message
      })
    })
  }

  // handleChange = () => {
  //     this.props.onUserInput(
  //         this.refs['filterTextInput'].value,
  //     );
  // }

  render() {
      return (
          <form>
              <input
                  type="text"
                  placeholder="Search..."
                  value={this.state.search}
                  onChange={this.handleInputChange}
              />
              <button onClick={this.handleFormSubmit}>Search</button>
          </form>
          
      );
  }
}

export default SearchBar;