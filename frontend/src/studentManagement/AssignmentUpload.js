import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "reactstrap";


class AssignmentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };

    this.onChangeName = this.onChangeName.bind(this);

    this.state = {
      selectedFile: null
    };

    this.state = {
      name: "",
      
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeHandler = event => {
    console.log(event.target.files[0]);
  };

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
     
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:4000/api/assignment", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        alert("upload success");
      })
      .catch(err => {
        // then print response status
        alert("upload fail");
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/assignments/all" + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
      
        });
      })
      .catch(function(error) {
        console.log(error);
      });
   }
  
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="offset-md-3 col-md-6">
            <div class="form-group files">

           

              <label > Upload your file for assignment  </label>
              <input
                type="file"
                class="form-control"
                multiple
                onChange={this.onChangeHandler}
              />
            </div>
            <div class="form-group">
              <ToastContainer />
              <Progress max="100" color="success" value={this.state.loaded}>
                {Math.round(this.state.loaded, 2)}%
              </Progress>
            </div>

            <button
              type="button"
              class="btn btn-success btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentUpload;
