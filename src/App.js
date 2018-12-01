import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import TableRow from './components/TableRow';
import StudentAdd from './components/StudentAdd';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData,createStudent, ChangeEditFlag,DeleteStudent } from "./actions/action";
import store from "./store";

class App extends Component {
  state = {
    posts: [],
    data:[],
    IsAddStudentNew : true,  
    EditID: null,
    EditName : "",
    EditCity : ""  
  }
  componentDidMount() {
    // axios.get('http://loopback.eu-4.evennode.com/api/Students')
    //   .then(res => {       
    //     const posts = res.data;
    //     this.setState({ posts });
    //     console.log(res);
    //     console.log(res.data);
    //   });   
    this.props.requestApiData();
    
    //createStudent(Student);
    //store.dispatch({ type: 'CREATE_STUDENT', action :Student });
    //this.props.createStudent(Student);

  }
  // function addAnotherPizza(state, props) {
  //   return {
  //     pizza: state.pizza + 1,
  //   }
  // }

  // addAnotherPizza = (state, props) =>{
  //   return {
  //     IsAddStudentNew : false,    
  //   }
  // }
  componentDidUpdate(prevProps) {
      
  }
  EditStudent =(data,name,city) =>{    
    // console.log("Edit Stuent Information ");
    // console.log(name);
    // console.log(city);  
    this.setState({IsAddStudentNew : false});    
    this.setState({EditID : data, EditName :name , EditCity :city})        
    //this.setState(addAnotherPizza);
    document.getElementById("name").value = name;
    document.getElementById("city").value = city;
      
  }
  DeleteStudent = (ID) =>{
    console.log("Delete Student !!");
    console.log(ID);
    this.props.DeleteStudent(ID);
  }
  render() {
    //const { results = [] } = this.props.data;
    console.log('Rander State')
    console.log(store.getState().data);
    const { data = []} = store.getState().data;
    return (
      
      
      // data.length
      //   ?  <h1>
      //       {console.log('render call')} 
      //     </h1>
      //   : <h1>loading...</h1>
        

      <div className="container">        
        <Header></Header>
        <StudentAdd upd={this.state.data} ProIsAddStudent = {this.state.IsAddStudentNew} ProEditID={ this.state.EditID} ProEditName={ this.state.EditName} ProEditCity={ this.state.EditCity} />
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Name</th>
              <th>City</th>
              <th>Edit</th>                      
              <th>Delete</th>             
            </tr>
          </thead>
          <tbody>  
                               
            {
              data.map(data =>
              // <td key={post.name}>{post.name}</td>
            //   <div>
            //   <td>{post.name ?post.name : "-" } </td>
            //   <td>{post.city ?post.city : "-"} </td> 
            //  </div>    
              <TableRow name={data.name} city={data.city} key={data.id} click={this.EditStudent.bind(this,data.id,data.name,data.city)}  DeleteClick={this.DeleteStudent.bind(this,data.id)}/>                      
            )}      
            {/* <TableRow name="STPritesh" city="Surat" key="100005" click={this.EditStudent} />                                          */}
          </tbody>
        </table>     
      </div>
    );
  }
}
function addAnotherPizza(state, props) {
  return  null;
}
const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData,ChangeEditFlag,DeleteStudent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
