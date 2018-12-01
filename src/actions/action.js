//const GET_ALL_STUDENT = 'GET_ALL_STUDENT';
//const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
//const REMOVE_STUDENT = 'REMOVE_STDUENT';
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const CREATE_NEW_STUDENT = "CREATE_NEW_STUDENT";
export const CREATE_STUDENT = 'CREATE_STUDENT';
export const ISADDSTUDENT ='IsAddStudent';
export const SET_ADD_STUDENT ='SET_ADD_STUDENT';
export const UPATE_STUDENT ='UPATE_STUDENT';
export const UPATE_STUDENT_DONE ='UPATE_STUDENT_DONE';
export const DELETE_STUDENT ='DELETE_STUDENT';
export const DELETE_STUDENT_DONE ='DELETE_STUDENT_DONE';

export const createStudent = (student) => {
    console.log('call create student method')
    console.log(student);    
    return {
      type: CREATE_STUDENT,
      action : student
    }
  };
  export const UpdateStudent = (student) => {
    console.log('call Update student method')
    console.log(student);    
    return {
      type: UPATE_STUDENT,
      action : student
    }
  };
  export const DeleteStudent = (ID) => {
    console.log('DELETE ID')
    console.log(ID);    
    return {
      type: DELETE_STUDENT,
      action : ID
    }
  };
// export const ChangeEditFlag = () => {
//     console.log('ChangeEditFlag Action')    
//     return {
//       type: ISADDSTUDENT
//     }
//   };
 export const ChangeEditFlag = () => ({ type: ISADDSTUDENT  })
// export const createStudent = student => ({ type: CREATE_STUDENT, student });
// export const deleteStudent = (id) => {
//     return {
//         type: actionTypes.REMOVE_STUDENT,
//         id: id
//     }
// }

export const honk = () => ({ type: REQUEST_API_DATA  }) // <-- action creator

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
