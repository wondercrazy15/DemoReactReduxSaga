import { RECEIVE_API_DATA,CREATE_NEW_STUDENT,SET_ADD_STUDENT,DELETE_STUDENT_DONE,UPATE_STUDENT_DONE } from "../actions/action";

export default (state = {data : [], IsAddStudent : true}, { type, data }) => {
  switch (type) {    
    case RECEIVE_API_DATA:
      console.log('Reducer RECEIVE_API_DATA Call');
      state={data}
      console.log(data);
      return state;
    case CREATE_NEW_STUDENT:
      console.log("CREATE_NEW_STUDENT");
      console.log(data);          
        return{
          ...state,
          data : [...state.data,data]
        }
       // return state;
    case SET_ADD_STUDENT:
      console.log("IsAddStudent action");          
        return{
          ...state,
          IsAddStudent : false
        }
    case UPATE_STUDENT_DONE:
      console.log("IsAddStudent action");    
      for (var i = 0, l = state.data.length; i < l; i++) {
          if (state.data[i].id === data.id) {
              state.data[i].name = data.name;
              state.data[i].city = data.city;
              break;
          }
      }
      return {
        data : state.data
      }
      // console.log(data);
      // console.log(state.data);
      // console.log(data.id);          
      // const { id, ...rest } = data.payload;
      // return{
      //   data: state.data.map(data => {
      //     if (data.id === data.id) {
      //       return { ...data, ...rest }
      //     }
      //     return data
      //   })
      // }
    case DELETE_STUDENT_DONE :
      console.log("DELETE UPDATE  action");      
      console.log(state.data);    
      console.log(data);
      console.log(data.action);    
      //return state.data.filter(data => data.id != data.action)    
      //let arr = data.filter(state.data -> state.data.id != data.action) 
                  
      // var index = state.data.indexOf(data.action);
      // if (index > -1) {
      //   state.data.splice(index, 1);
      // }
      // console.log(state.data);
      var NewData =  state.data.filter(function(student) {
        return student.id != data.action;
      });

      //return NewData;
      // array = [2, 9]
      // console.log(array);
      return {
        data : NewData  
      }
    default:
      return state;
  }
};
