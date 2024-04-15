import React, { useEffect, useState } from "react"
import { Navbar } from "./Navbar";
import axios from 'axios';
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

export const DeleteTask = () => {

    // const url="https://reminder-3jth.onrender.com/";
    const url="http://localhost:8080/";

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [importance, setImportance] = useState();

    const { user } = useAuthContext();

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        axios.get(url + id, { headers: { Authorization: 'Bearer ' + user.token } })
            .then((r) => {
                setTitle(r.data.title);
                setDescription(r.data.description);
                setImportance(r.data.importance)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [user])

    function deleteTask(e) {
        e.preventDefault();

        if (!user) {
            // navigate('/login');
            return;
        }

        axios.delete(url + id, { headers: { Authorization: 'Bearer ' + user.token } })
            .then((r) => {
                console.log(r.data);
                navigate('/');
            })
            .catch((e) => {
                console.log(e.response.data.error);
            })

    }
    return (
        <div>
            <Navbar />
                    <h1 className="text-center my-3">Are you sure?</h1>
                    {/* <form onSubmit={deleteTask}> */}
                        <div className="row justify-content-center m-2 mb-3">
                            <div className="col-md-6">
                                <div className={importance === 1 ? "bg-success bg-gradient rounded text-center text-light pb-3" : (importance === 2 ? "bg-primary bg-gradient  rounded text-center text-light pb-3" : "bg-danger bg-gradient rounded text-center text-light pb-3")}>

                                    <p className="fs-2" style={{ paddingTop: 10, margin: 0 }}><i>{title}</i></p>

                                    <p className="lead fs-35 text-justify mt-1 mx-5" style={{ paddingBottom: 10, margin: 0 }}>{description}</p>

                                    <p className="font-monospace" style={{ paddingBottom: 6, margin: 0 }}><i><u>{importance === 1 ? "Not that important" : (importance === 2 ? "Important" : "VERY IMPORTANT")}</u></i></p>
                                </div>
                            </div>
                        </div>
                                    <div className="text-center">
                                        <button type="submit" onClick={deleteTask} className="btn btn-danger py-2 px-5">Delete</button>
                                    </div>
                    {/* </form> */}
                    <Footer/>
                </div>
    )
}