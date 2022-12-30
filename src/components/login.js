import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './login.css';
import { Link } from 'react-router-dom';
export function Login(){
    return(
        <>
            <div className="container">
                <form>
                <div className="card car">
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <div className="card-body">
                        <div>
                            <label>User Name :&nbsp;</label><input type="text" name="username" id="username" />
                        </div>
                        <div className="mt-3">
                            <label>Password &nbsp;&nbsp;&nbsp;:&nbsp;</label><input type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className="card-footer">
                        <div>
                            <button className="loginregbutton">Login</button>
                        </div>
                        <div className="text-success mt-4 regw">
                            <Link to="/Register">
                                <h5>Register</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}