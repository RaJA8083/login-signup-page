import React,{useEffect,useState} from 'react'
import {Table,Jumbotron} from 'reactstrap'

const Profile = ({match}) =>{
  //let data = JSON.parse(localStorage.getItem("USER"))
   // console.log(data);
   const [data,setData]= useState({})
   useEffect(()=>{
    console.log("loe", match.params.user)
    let username = match.params.user;
    let url = `https://sparkling-silence-8799.getsandbox.com/user/${username}`;
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>{console.log(res); setData(res.user)})
    .catch(err=> console.log("err", err))

   },[]);

    return(
        <div>
            <Jumbotron>
        <Table>
            <thead>
                <tr>
                    <th>#id </th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{data && data.id}</th>
                    <th>{data && data.email}</th>
                    <th>{data && data.password}</th>
                    <th>{data && data.username}</th>
                    
    </tr>
            </tbody>
            </Table>
            </Jumbotron>
            </div>
    )
    }
    export default Profile