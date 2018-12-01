import axios from 'axios';
export const fetchData = async () => {
    // axios.get('http://loopback.eu-4.evennode.com/api/Students')
    // .then(res => {  
    //   console.log('loopback API Call ')     
    //   const posts = res.data;      
    //   return posts;
    // });   
    try {
      console.log('API Call ')
      // const response = await fetch("http://loopback.eu-4.evennode.com/api/Students");
      // const data = await response.json();
      // console.log(data);
      // console.log('API ')
      const response = await fetch("http://loopback.eu-4.evennode.com/api/Students");
      const data = await response.json();
      console.log(data);
     // const data =JSON.parse(response);
       //return JSON.stringify(data);
       
       return data;
    
    } catch (e) {
      console.log(e);
    }
}

export const InsertData =(data) =>{  
  let Studentdata ={
      "name": data.action.name,
      "city": data.action.city 
  }

  return axios.request({
    method: 'post',
    url: 'http://loopback.eu-4.evennode.com/api/Students',
    data: Studentdata
  });

  // axios.post('http://loopback.eu-4.evennode.com/api/Students', {    
  //     "name": data.action.name,
  //     "city": data.action.city     
  // })
  // .then(function (response) {
  //   return response;
  //   console.log("Insert @@@@")
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   return error;
  //   console.log(error);
  // });
}


export const DeleteStudentData =(data) =>{   
  console.log('DeleteStudentData APi')  
  let ID= data.action;
  console.log(data);
  console.log(ID);
  return axios.request({
    method: 'DELETE',
    url: 'http://loopback.eu-4.evennode.com/api/Students/' + ID,    
  });
}

export const UpdateStudentData =(data) =>{ 
  console.log(data); 
  let Studentdata ={
      "id" : data.action.id,
      "name": data.action.name,
      "city": data.action.city 
  }
  console.log("Student Data"); 
  console.log(Studentdata); 
  return axios.request({
    method: 'PUT',
    url: 'http://loopback.eu-4.evennode.com/api/Students',
    data: Studentdata
  });  
}


