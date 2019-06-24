import React, { Component } from "react";
import axios from "axios";

class instructorUpdate extends Component {
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
            contactNumber:'',
            dept: "",
            title: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/api/instructor/edit/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    mail: response.data.mail,
                    dept: response.data.dept,
                    title: response.data.title,
                    contactNumber: response.data.contactNumber,
                    password: response.data.password
                });
            })
            .catch(function(error) {
                console.log(error);
            });
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
        const updateInstructor = {
            name: this.state.name,
            mail: this.state.mail,
            contactNumber: this.state.contactNumber,
            dept: this.state.dept,
            title:this.state.title,
            password:this.state.password,

        };

        axios
            .post(
                "http://localhost:4000/api/instructor/update/" + this.props.match.params.id,
                updateInstructor
            )
            .then(res => console.log(res.data));

        this.props.history.push("/instructorList");
    }

    render() {
        return (
            <div>
                <h3> Update Instructor </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Instructor Name </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        required/>
                    </div>
                    <div className="form-group">
                        <label> Instructor Email </label>
                        <input
                            type="email"
                            className="form-control"
                            value={this.state.mail}
                            onChange={this.onChangeMail}
                        required/>
                    </div>
                    <div className="form-group">
                        <label> Instructor Number </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.contactNumber}
                            onChange={this.onChangeContact}
                        required/>
                    </div>
                    <div className="form-group">
                        <label> Instructor Dept </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.dept}
                            onChange={this.onChangeDept}
                        />
                    </div>
                    <div className="form-group">
                        <label> Instructor Title </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        required/>
                    </div>
                    <div className="form-group">
                        <label> Instructor Password </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        required/>
                    </div>
                    <div className="form-group">

                        <br />

                        <div className="form-group">
                            <input
                                type="submit"
                                value="Update Instructor"
                                className="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default instructorUpdate;
