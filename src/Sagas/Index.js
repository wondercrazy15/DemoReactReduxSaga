import { all } from 'redux-saga/effects'

import StudentFetchSaga from '../Sagas/fetch'
import StduentAddSaga from '../Sagas/studentadd'


export default function* rootSaga() {
  yield all([
    StudentFetchSaga(),
    StduentAddSaga()    
  ])
}
