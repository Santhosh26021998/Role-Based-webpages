import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Register(){

    const registerfor=async(event)=>{
        event.preventDefault();
        let datas=new FormData(event.target);
        let configuration={headers:{"enctype":"multipart/form-data"}};

        let fn=document.getElementById("firstname").value;
        let ln=document.getElementById("lastname").value;
        let email=document.getElementById("email").value;
        let phone=document.getElementById("phone").value;
        let pw=document.getElementById("password").value;
        let fnstr = /^[A-Za-z]{15}$/;

        if(!fnstr.test(fn)){
            alert("Enter your firstname character maximum 15");
            document.getElementById("firstname").value="";
        }
        else if(!fnstr.test(ln)){
            alert("Enter your lastname character maximum 10");
            document.getElementById("lastname").value="";
        }
        else if(fn!=""&&ln!=""&&email!=""){
        await axios.post("http://localhost:3002/Register",datas,configuration)
        .then(function(res){
            if(res.data.status==="error"){
                alert("error");
                // window.location.reload();
            }
            else if(res.data.status==="success"){
                alert("inserted");
                window.location.href="/";
            }
        })
        .catch(function(error){
                if(error){
                    console.log(error);
                }
        })}
        else{
            alert("enter the values");
        }
            

    }

    return(
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-5">&nbsp;</div>
                    <div className="col-lg-2">
                        <h1>Register</h1>
                    </div>
                    <div className="col-lg-5">&nbsp;</div>
                </div>
                <form onSubmit={registerfor}>
                <div className="row mt-3">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-1">
                        <label>Firstname</label>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="firstname" id="firstname" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-1">
                        <label>Lastname</label>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="lastname" id="lastname" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-1">
                        <label>Email</label>
                    </div>
                    <div className="col-lg-6">
                        <input type="email" name="email" id="email" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-1">
                        <label>Phone</label>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="phone" id="phone" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-1">
                        <label>Password</label>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="password" id="password" />
                    </div>
                </div>
                <div className="row mt-4">
                <div className="col-lg-5">&nbsp;</div>
                    <div className="col-lg-2">
                        <button className="loginregbutton">Register</button>
                    </div>
                </div>
                <div className="row mt-4">
                <div className="col-lg-7">&nbsp;</div>
                    <div className="col-lg-2">
                            <Link to="/">
                                <h5>Login</h5>
                            </Link>
                    </div>
                </div>
                </form>
            </div>

        </>
    )
}