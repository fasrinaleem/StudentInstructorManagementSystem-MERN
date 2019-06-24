import React, { Component } from "react";
import axios from "axios";

class editAssignment extends Component {
    constructor(props) {
        super(props);

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeModuleName=this.onChangeModuleName.bind(this);
        this.onChangeModulestatus=this.onChangeModulestatus.bind(this);
        this.onChangeExamDay=this.onChangeExamDay.bind(this);

        this.state = {
            name: "",
            status: "",
            dueDate: "",
            errors: {}
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/api/assignments/edit/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    status: response.data.status,
                    dueDate: response.data.dueDate,
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    onChangeModuleName(e){
        this.setState({
            name:e.target.value,
        });
    }

    onChangeModulestatus(e){
        this.setState({
            status:e.target.value,
        });
    }
    onChangeExamDay(e){
        this.setState({
            dueDate:e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const updateAssignment = {
            name: this.state.name,
            status: this.state.status,
            dueDate: this.state.dueDate

        };

        axios
            .post(
                "http://localhost:4000/api/assignments/update/" + this.props.match.params.id,
                updateAssignment
            )
            .then(res => console.log(res.data));

        this.props.history.push("/viewAssignments");
    }

    render() {
        return (
            <div>
                <h3> Update Assignment </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Assignment Name </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeModuleName}
                        required/>
                    </div>
                    <div className="form-group">
                        <label> Assignment status </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeModulestatus}
                        />
                    </div>
                    <div className="form-group">
                        <label> Assignment DueDate </label>
                        <input
                            type="Date"
                            className="form-control"
                            value={this.state.dueDate}
                            onChange={this.onChangeExamDay}
                         required/>
                    </div>
                    <div className="form-group">

                        <br />

                        <div className="form-group">
                            <input
                                type="submit"
                                value="Update Assignment"
                                className="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default editAssignment;
