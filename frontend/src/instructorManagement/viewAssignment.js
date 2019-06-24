import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from 'react-moment';
import "bootstrap/dist/css/bootstrap.min.css";


class viewAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = { assignments: [] };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/api/assignments/all")
            .then(response => {
                this.setState({ assignments: response.data });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios
            .get("http://localhost:4000/api/assignments/all")
            .then(response => {
                this.setState({ assignments: response.data });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    instructorList() {
        return this.state.assignments.map(function(currentInstructor) {
            return(
                <div className="card bg-light mb-3" key={currentInstructor.id}  >
                    {/*<div className="card-header">Cousre Name :  { currentInstructor.name}</div>*/}
                    {/*<div className="card-body"> {currentInstructor.mail }</div>*/}
                    {/*<div> {currentInstructor.contactNumber }</div>*/}
                    {/*<div> {currentInstructor.dept }</div>*/}
                    {/*<div> {currentInstructor.title }</div>*/}

                    <div className="card-body">

                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{currentInstructor.name}</h3>

                            <h6 class="card-subtitle mb-2 text-muted"><Moment diff="2019-06-23" unit="days">{currentInstructor.dueDate}</Moment> days left</h6>
                        </div>

                    </div>

                    <div className="card-footer">
                        <Link
                            to={"/assignment/edit/" + currentInstructor._id}

                            className=" btn btn-warning"
                            style={{
                                fontSize:"15px",
                                width:"100px"
                            }}
                        >
                            <span> edit</span>
                        </Link>
                        {"  "}
                        <Link
                            to={"assignment/delete/" + currentInstructor._id}
                            className="btn btn-danger"
                            style={{
                                fontSize:"15px",
                                width:"100px"
                            }}
                        >
                            <span> delete</span>
                        </Link>
                    </div>
                </div>
            )

        });
    }

    render() {
        return (
            <div>
                <div className="raw" style={{ marginLeft:"30px",marginRight:"20px",marginBottom:"20px"}}>
                    <div  className="col-md-">
                        {this.instructorList()}
                        {" "}
                    </div>


                </div>




            </div>
        );
    }
}



export default viewAssignment;
