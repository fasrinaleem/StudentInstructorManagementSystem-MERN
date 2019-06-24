import React,{Component} from "react";
import TextInputGroup from "./layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class AdminAdd  extends Component{

   constructor(props) {
    super(props);

    this.state={
       adminID:'',
        name:'',
        email:'',
        password:''
    }

    this.onSubmit=this.onSubmit.bind(this);
    this.onChangeID=this.onChangeID.bind(this);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);


}
    
onChangeID(e){
  this.setState({
      adminID:e.target.value,
  });
}

onChangeName(e){
  this.setState({
      name:e.target.value,
  });
}

onChangeEmail(e){
  this.setState({
      email:e.target.value,
  });
}
onChangePassword(e){
  this.setState({
      password:e.target.value,
  });
}

onSubmit(e){
  e.preventDefault();

  const newData ={
      adminID:this.state.adminID,
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
  }

  axios.post("http://localhost:4000/api/admin/add", newData)
  .then(res => {
      console.log(res.data)
  })

  this.props.history.push('/adminview');

  this.setState({
      adminID:'',
      name:'',
      email:'',
      password:''
  })

}
    
    
    render(){
     

      return(
        <div style={{ marginTop: 20 }}>
        <center>
          <div className="card mb-3" style={{ width: "700px" }}>
            <div style={{ width: "700px" }}>
              <div className="card-header">
                <b> Add New Admin </b>
              </div>
              <div className="çard-body">
                <form onSubmit={this.onSubmit}>

                
                <TextInputGroup
                label="Admin id"
                name="adminID"
                placeholder=" Enter Admin id"
                value={this.state.adminID}
                onChange={this.onChangeID}
                //error={errors.name}
              />

              <TextInputGroup
              label="Admin name"
              name="name"
              placeholder=" Enter Admin name"
              value={this.state.name}
              onChange={this.onChangeName}
              //error={errors.name}
            />


            <TextInputGroup
            label="Admin mail"
            name="email"
            placeholder=" Enter Admin mail"
            value={this.state.email}
             onChange={this.onChangeEmail}
            //error={errors.name}
          />

          <TextInputGroup
          label="Admin password"
          name="password"
          type="password"
          placeholder=" Enter Admin password"
          value={this.state.password}
          onChange={this.onChangePassword}
          //error={errors.name}
        />
                 
                    <button
                    className="btn btn-primary"
                    type="submit"
                      name="action"
                    >
                          Submit
                    </button>
               
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
      )
    }
  }

export default AdminAdd;