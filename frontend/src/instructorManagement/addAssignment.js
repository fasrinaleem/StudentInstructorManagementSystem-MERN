import React,{Component} from 'react';
import axios from'axios';


export default class addAssignment extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            status:'',
            dueDate:'',
            errors:{}
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeModuleName=this.onChangeModuleName.bind(this);
        this.onChangeModulestatus=this.onChangeModulestatus.bind(this);
        this.onChangeExamDay=this.onChangeExamDay.bind(this);


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

    onSubmit(e){
        e.preventDefault();





        const assign={
            name:this.state.name,
            status:this.state.status,
            dueDate:this.state.dueDate
        }

        axios.post('http://localhost:4000/api/assignments/add',assign)
            .then(res => console.log(res.data));

        this.props.history.push("/viewAssignments");



        this.setState({
            name:'',
            status:'',
            dueDate:''
        })

    }





    render() {


        return(
            <div style={{ marginTop: 20 }}>
                <center>
                    <div className="card mb-3" style={{ width: "700px" }}>
                        <div style={{ width: "700px" }}>
                            <div className="card-header">
                                <b> Add New Assignment </b>
                            </div>
                            <div className="çard-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="Assignment name"
                                                   value={this.state.name}
                                                   onChange={this.onChangeModuleName}
                                                   required
                                            />
                                        </div>
                                    </div><br/>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="Status"
                                                   value={this.state.status}
                                                   onChange={this.onChangeModulestatus}
                                            />
                                        </div>
                                    </div><br/>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="Date"
                                                   className="form-control"
                                                   placeholder="Due Date"
                                                   value={this.state.dueDate}
                                                   onChange={this.onChangeExamDay}

                                                   required/>
                                        </div>
                                    </div><br/>

                                    <button type="submit" className="btn btn-success">Add Assignment</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}
