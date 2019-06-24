import React, { Component } from "react";
import axios from "axios";

class AdminUpdate extends Component {
  constructor(props) {
    super(props);

    this.handlechangename = this.handlechangename.bind(this);
    this.handlechangemail = this.handlechangemail.bind(this);
    this.handlechangeadminId = this.handlechangeadminId.bind(this);
    //this.handlechangecontactNumber = this.handlechangecontactNumber.bind(this);
    this.handlechangepassword = this.handlechangepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      adminID: "",
      name: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/admin/edit/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          adminID: response.data.adminID,
          name: response.data.name,
          email: response.data.email,
          password: response.data.password
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handlechangeadminId = e => {
    // e.preventDefault();
    this.setState({
      adminID: e.target.value
    });
  };

  handlechangename = e => {
    // e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };

  handlechangemail = e => {
    // e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  // handlechangecontactNumber = e =>{
  //  // e.preventDefault();
  //   this.setState({
  //     contactNumber: e.target.value
  //   })

  // }

  handlechangepassword = e => {
    // e.preventDefault();
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const obj = {
      adminID: this.state.adminID,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:4000/api/admin/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    // this.props.history.push('/admin/edit');

    this.props.history.push("/adminview");
  };

  //  handlecancel = e => {
  //    e.preventDefault();
  //    this.props.history.push('/admin/edit');
  //  }

  render() {
    return (
      <div>
        <h3> Update Admin </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Admin Name </label>
            <input
              type="text"
              className="form-control"
              value={this.state.adminID}
              onChange={this.handlechangeadminId}
            />
          </div>

          <div className="form-group">
            <label> Admin Name </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.handlechangename}
            />
          </div>

          <div className="form-group">
            <label> Admin mail </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.handlechangemail}
            />
          </div>

          <div className="form-group">
            <label> Admin password </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.handlechangepassword}
            />
          </div>

          <div className="form-group">
            {/* <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="year"
                id="year1"
                value="year1"
                checked={this.state.year === "Year 01"}
                onChange={this.onChangeYear}
              />
              <label className="form-check-label"> Year 01 </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="year"
                id="year2"
                value="year2"
                checked={this.state.year === "Year 02"}
                onChange={this.onChangeYear}
              />
              <label className="form-check-label"> Year 02 </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="year"
                id="year3"
                value="year3"
                checked={this.state.year === "Year 03"}
                onChange={this.onChangeYear}
              />
              <label className="form-check-label"> Year 03 </label>
            </div> */}

            <br />

            <div className="form-group">
              <input
                type="submit"
                value="Update Admin"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminUpdate;
