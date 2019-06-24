import React, { Component } from "react";
import TextInputGroup from "../courseManagement/layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class addInstructor extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
       this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeDept = this.onChangeDept.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            mail: "",
            contactNumber: "",
            dept: "",
            title: "",
            password: "",
            errors: {}
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeMail(e) {
        this.setState({
            mail: e.target.value
        });
    }
    onChangeContact(e) {
      this.setState({
          contactNumber: e.target.value
      });
    };
    onChangeDept(e) {
        this.setState({
            dept: e.target.value
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const { name, mail, contactNumber,dept,title,password } = this.state;

        //Check for errors
        if (name === "") {
            this.setState({ errors: { name: "Instructor Name is required" } });
            return;
        }
        if (mail === "") {
            this.setState({
                errors: { mail: "InstructorRoute Email is required" }
            });
            return;
        }
        if(contactNumber===""){
            this.setState({errors:{contactNumber:"ContactNumber is required"}})
        }
        if (password === "") {
          this.setState({ errors: { password: "Password is required" } });
          return;
        }

        console.log(`Form Submitted`);
        console.log(`Course Name : ${this.state.name}`);
        console.log(`Instructor Name : ${this.state.instructorName}`);
        console.log(`Year : ${this.state.year}`);

        const newUser = {
            name: this.state.name,
            mail: this.state.mail,
            contactNumber: this.state.contactNumber,
            dept: this.state.dept,
            title:this.state.title,
            password:this.state.password,

        };

        axios
            .post("http://localhost:4000/api/instructor/add", newUser)
            .then(res => console.log(res.data));

        this.props.history.push("/instructorList");

        // //Clear state after error checking(When click submit button)
        this.setState({
            name: "",
            mail: "",
            contactNumber: "",
            dept: "",
            title: "",
            password: "",

        });
    }

    //   onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        //  const { courseName, instructorName, year, errors } = this.state;
        const { errors } = this.state;

        return (
            <div style={{ marginTop: 20 }}>
                <center>
                    <div className="card mb-3" style={{ width: "700px" }}>
                        <div style={{ width: "700px" }}>
                            <div className="card-header">
                                <b> Add New Instructor </b>
                            </div>
                            <div className="çard-body">
                                <form onSubmit={this.onSubmit}>
                                    <TextInputGroup
                                        label="instructor Name"
                                        name="name"
                                        placeholder=" Enter instructor Name"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email Name"
                                        name="mail"
                                        type="email"
                                        placeholder=" Enter Instructor Email"
                                        value={this.state.mail}
                                        onChange={this.onChangeMail}
                                        error={errors.mail}
                                    />
                                    <TextInputGroup
                                        label="contact Number"
                                        name="contactNumber"
                                        type="number"
                                        placeholder=" Enter Instructor Number"
                                        value={this.state.contactNumber}
                                        onChange={this.onChangeContact}
                                        error={errors.contactNumber}
                                    />
                                    <TextInputGroup
                                        label="Dept"
                                        name="dept"
                                        placeholder=" Enter Instructor Dept"
                                        value={this.state.dept}
                                        onChange={this.onChangeDept}
                                        // error={errors.instructorName}
                                    />
                                    <TextInputGroup
                                        label="title Name"
                                        name="title"
                                        placeholder=" Enter Instructor title"
                                        value={this.state.title}
                                        onChange={this.onChangeTitle}
                                        // error={errors.instructorName}
                                    />
                                    <TextInputGroup
                                        label="password "
                                        name="password"
                                        placeholder=" Enter Instructor password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        error={errors.password}
                                    />
                                    <div>
                                        <div className="form-group">
                                            <input type="submit" value="Create Instructor" className="btn waves-effect waves-light" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default addInstructor;
