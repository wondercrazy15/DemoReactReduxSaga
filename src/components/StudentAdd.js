import React from 'react';
import { createStudent,ChangeEditFlag,UpdateStudent } from "../actions/action";
import store from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class StudentAdd extends  React.Component
{
    constructor(props) {        
        super(props);  
        this.state = { name : "",
        city : "",IsAddStudent : true};
        console.log("Parent Data Access");
        console.log(props.upd);
        console.log(props.ProIsAddStudent);
        // if(props.ProEditName){
        //     this.setState({name : props.ProEditName, city :props.ProEditCity});
        // }      
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // state ={
    //     name : "",
    //     city : ""
    // }
  
    SubmitStudentInfo = () =>{
        
        console.log('Supper Props Parent');
        console.log(this.props.ProEditID);
        console.log(this.props.ProEditName);
        console.log(this.props.ProEditCity);
        console.log(this.props.ProIsAddStudent);    
        let Name =document.getElementById("name").value;
        let City =document.getElementById("city").value;
        //console.log(document.getElementById("name").value);
        //console.log(document.getElementById("city").value);
        //this.setState({ name : event.target.value});
        //console.log(this.state.name);
        //console.log(this.state.IsAddStudent);
        //console.log(this.state.city);
        let Student={ name:Name, city : City }
        if(this.props.ProIsAddStudent === true){                       
            this.setState({ name:Name, city : City});
            this.props.createStudent(Student);  
            document.getElementById("name").value="" ;
            document.getElementById("city").value="";       
        }
        else{
           // this.props.IsAddStudent();          
           console.log("First Update Call "); 
           Student={ name:Name, city : City,id:this.props.ProEditID }          
           this.props.UpdateStudent(Student);
        }
        
        //let Student={ name:this.state.city, city : this.state.name }
        //this.props.dispatch(createStudent(Student))
        //createStudent(Student);
        //store.dispatch({ type: 'CREATE_STUDENT', action :Student });
        //this.props.createStudent(Student);
        //store.dispatch({ type :"CREATE_STUDENT" , action : Student });
        //console.log(this.state.city);
        //console.log(this.state.name);
        
    }
      handleChange(event) {
       // this.state.form[event.target.name] = event.target.value;        
        if(event.target.name === 'name')
        {
            this.setState({ name : event.target.value});
        }
        if(event.target.name === 'city')
        {
            this.setState({ city : event.target.value});
        }       
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        
      }
    render(){
        return<div>
                <form>
                <div className="form-group">
                <label>Name: </label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={ this.state.name} onChange={ this.handleChange} />
                </div>
                    <div className="form-group">
                    <label>City:</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter City" name="city" value={ this.state.city} onChange={ this.handleChange} />                   
                    </div>
                </form>
                <button onClick={ this.SubmitStudentInfo}  className="btn btn-default">Submit</button>                
            </div>
    }

}
// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         SubmitStudentInfo: (payload: Payload) => dispatch({ type: CREATE_STUDENT, payload })
//     }
//   }

//   // avoid: wasteful; rebinds every time ownProps changes
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onClick: event => dispatch(honk()) // <-- whoops! we're not using ownProps
//   })
  
//   const connector: Connector<{}, Props> = connect(null, mapDispatchToProps)
//   export default connector(NewPostPage)
  
//export default StudentAdd;


// function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     createPost: (payload: Payload) => dispatch({ type: CREATE_POST, payload })
//   }
// }

// const connector: Connector<{}, Props> = connect(null, mapDispatchToProps)
// export default connector(NewPostPage)
const mapStateToProps = (state) => {
    console.log(state.items);
    return { data : state.data, IsAddStudent :state.IsAddStudent };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createStudent,UpdateStudent }, dispatch);

// const mapDispatchToProps = dispatch => ({    
//     createStudent: Student => dispatch(createStudent(Student),UpdateStudent(Student))
//     //IsAddStudent : () => dispatch().IsAddStudent()
//   })
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(StudentAdd)