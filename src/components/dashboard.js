import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import './login.css';

export function Dashboard(){
    return(
        <>
            <div className="container">
                <div className="card">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5">
                        <h3>Name :&nbsp;&nbsp;&nbsp;Vinoth Kumar</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-2">
                        <FontAwesomeIcon icon={faPenToSquare} className="dashedicon" />&nbsp;&nbsp;&nbsp;   
                        <FontAwesomeIcon icon={faTrashCan} className="dashdeicon" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}