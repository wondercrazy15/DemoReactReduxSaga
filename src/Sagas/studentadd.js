import { call, put, takeLatest,takeEvery,fork } from "redux-saga/effects";

import { CREATE_STUDENT,ISADDSTUDENT,DELETE_STUDENT,UPATE_STUDENT } from "../actions/action";
import { fetchData,InsertData,DeleteStudentData,UpdateStudentData } from "../services/api";


function* NewpostApiData(action) {  
  
  try {    
    try {
      const newPost = yield call(InsertData, action)
      console.log("new POst");
      console.log(newPost.data);
      yield put({ type: 'CREATE_NEW_STUDENT', data: newPost.data })      
    } catch (e) {
      console.log(e);
    }    
  } catch (e) {
    console.log(e);
  }
}

function* ChangeName() {  
  
  try {    
    try {
      yield put({ type: 'SET_ADD_STUDENT'})      
      console.log("Call Change");     
    } catch (e) {
      console.log(e);
    }    
  } catch (e) {
    console.log(e);
  }
}
function* DeleteStudent(action) {  
  
  try {    
    try {
      console.log("DeleteStudent Worker Call ");
      const Res_Student = yield call(DeleteStudentData, action)
      console.log("DELETE STUENT Reps");
      console.log(Res_Student);      
      yield put({ type: 'DELETE_STUDENT_DONE', data: action })       
    } catch (e) {
      console.log(e);
    }    
  } catch (e) {
    console.log(e);
  }
}
function* UpdateStudent(action) {  
  
  try {    
    try {
      console.log("Update  Worker Call ");
      console.log(action);
      const Res_Student = yield call(UpdateStudentData, action)
      console.log("Update STUENT Reps");
      console.log(Res_Student);
      console.log(action);      
      yield put({ type: 'UPATE_STUDENT_DONE', data: Res_Student.data })       
    } catch (e) {
      console.log(e);
    }    
  } catch (e) {
    console.log(e);
  }
}

export default function* StduentAddSaga() {
  console.log("Create New Student Saga !! @@@");  
   yield takeLatest(CREATE_STUDENT,NewpostApiData);  
   yield takeLatest(ISADDSTUDENT,ChangeName);
   yield takeLatest(UPATE_STUDENT,UpdateStudent); 
   yield takeLatest(DELETE_STUDENT,DeleteStudent);  
}
