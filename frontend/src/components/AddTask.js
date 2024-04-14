import React, { useEffect, useState } from "react"
import { Navbar } from "./Navbar";
import axios from 'axios';
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const AddTask = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [importance, setImportance] = useState(2);

    const {user}=useAuthContext();

    const navigate=useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/login');
            return;
        }
    },[user])

    function addTask(e) {
        e.preventDefault();

        if(!user){
            // navigate('/login');
            return;
        }

        axios.post('http://localhost:8080/', {title,description,importance}, {headers:{Authorization:'Bearer ' + user.token}})
        .then((r)=>{
            console.log(r.data);
            navigate('/');
        })
        .catch((e)=>{
            console.log(e.response.data.error);
        })

    }
    return (
        <div>
            <Navbar />
            <div className="row justify-content-center m-5">
                <div className="col-md-6 shadow pb-4 bg-body rounded">
                    <h1 className="text-center my-3">Add Task</h1>
                    <form onSubmit={addTask}>
                        <div className="mb-3">
                            {/* <label className="form-label">Enter Username</label> */}
                            <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                        </div>

                        <div className="mb-3">
                            {/* <label className="form-label">Enter Password</label> */}
                            <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Set Importance</label>
                            <input type="range" className="form-range" onChange={(e) => setImportance(e.target.value)} min="1" max="3" defaultValue="2" step="1" />
                            <div className="row">
                                <div className="col-4">
                                    <p className="text-success">not that important</p>
                                </div>
                                <div className="col-4 text-center">
                                    <p className="text-primary">important</p>
                                </div>
                                <div className="col-4 text-end">
                                    <p className="text-danger">very important</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-dark py-2 px-5">Add</button>
                        </div>

                        {/* {error && <div  className="text-danger">{error}</div>} */}

                    </form>
                </div>
            </div>
        </div>
    )
}