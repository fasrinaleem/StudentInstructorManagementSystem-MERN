import React,{Component} from "react";
import TextInputGroup from "./layout/TextInputGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class AdminAdd  extends Component{

    constructor(props) {

        super(props);
    
        this.handlechangename = this.handlechangename.bind(this);
        this.handlechangemail = this.handlechangemail.bind(this);
        this.handlechangecontactNumber = this.handlechangecontactNumber.bind(this);
        this.handlechangepassword = this.handlechangepassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    
        this.state = {
          name:" ",
          mail:" ",
          contactNumber:" ",
          password: " ", 
          errors:{}
            }
        }
     
       
    
        handlechangename = e =>{
            this.setState({
                name: e.target.value
            })
      
        }
    
        handlechangemail = e =>{
          // e.preventDefault();
           this.setState({
               mail : e.target.value
           })
     
       }
    
       handlechangecontactNumber = e =>{
        // e.preventDefault();
         this.setState({
            contactNumber: e.target.value
         })
    
     }
    
     handlechangepassword = e => {
      // e.preventDefault();
       this.setState({
        password: e.target.value
       })


    //    handlechangepassword  = e => {
    //     // e.preventDefault();
    //      this.setState({
    //       password: e.target.value
    //      })
    
    }
    
    
         handleSubmit = e => {
            e.preventDefault();
           
    
           console.log(`Form submitted:`);
           console.log(`Todo Description: ${this.state.name}`);
           console.log(`Todo Responsible: ${this.state.mail}`);
           console.log(`Todo Priority: ${this.state.contactNumber}`);
           console.log(`Todo Priority: ${this.state.password}`);
    
          const newData = {
               name : this.state.name,
               mail : this.state.mail,
               contactNumber: this.state.contactNumber,
               password:this.state.password

          };
    
           axios.post("http://localhost:4000/api/admin/add", newData)
           .then(res => {
               console.log(res.data)
           })
    
           //this.props.history.push('/admin/edit');
    
           this.setState({
              name: " ",
              mail: " ",
              contactNumber: " ",
              password: ""
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
                <form onSubmit={this.handleSubmit}>

                  <TextInputGroup
                    label="Admin Name"
                    name="name"
                    placeholder=" Enter Admin Name"
                    value={this.state.name}
                    onChange={this.handlechangename }
                   // error={errors.courseName}
                  />
                  <TextInputGroup
                    label="Admin Email"
                    name="mail"
                    placeholder=" Enter Admin mail"
                    value={this.state.mail }
                    onChange={this.handlechangemail }
                   // error={errors.instructorName}
                  />
                 
                  <TextInputGroup
                  label="Admin Contact Number"
                  name="contactNumber"
                  placeholder=" Enter Contact Number"
                  value={this.state.contactNumber}
                  onChange={this. handlechangecontactNumber }
                  //error={errors.instructorName}
                />


                <TextInputGroup
                label=" Enter Password"
                name="password"
                placeholder=" Enter the password"
                value={this.state.password}
                onChange={this.handlechangepassword}
                //error={errors.instructorName}
              />


                  <div>
                    <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                          Submit
                    </button>
                  </div>
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