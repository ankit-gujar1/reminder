import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
// import { Link } from 'react-router-dom'

const Home = () => {

    // const url="https://reminder-3jth.onrender.com/";
    const url = "http://localhost:8080/";

    const [task, setTasks] = useState();
    const [users, setUsers] = useState();

    const { user } = useAuthContext();

    useEffect(() => {

        axios.get(url + "admin/tasks", { headers: { Authorization: 'Bearer ' + user.token } })
            .then((r) => {
                setTasks(r.data);
            })
            .catch((e) => {
                console.log(e);
            })

        axios.get(url + "admin/users", { headers: { Authorization: 'Bearer ' + user.token } })
            .then((r) => {
                setUsers(r.data);
            })
            .catch((e) => {
                console.log(e);
            })

    },[user])
    return (
        <div>
            <Navbar />
            <h1 className='text-center'>Admin</h1>
            {task &&
                task.map((i) => //key should be in outer most div of .map
                    <div key={i._id} className="row justify-content-center m-2 mb-3">
                        <div className="col-md-6">
                            <div className={i.importance === 1 ? "bg-success bg-gradient rounded text-center text-light pb-3" : (i.importance === 2 ? "bg-primary bg-gradient  rounded text-center text-light pb-3" : "bg-danger bg-gradient rounded text-center text-light pb-3")}>

                                {users &&
                                    users.map(u => {
                                        if(i.user_id===u._id){
                                            // console.log("hi")
                                            return(
                                                <p key={i._id} className="fs-2 px-2" style={{ paddingTop: 10, margin: 0 }}><i className="fa fa-user fs-3 pe-1"></i><i>{u.userName}</i></p>
                                            )
                                        }
                                        return null;
                                    })
                                    
                                }
                                {/* setuName(n); */}
                                

                                <p className="fs-2 px-2" style={{ paddingTop: 10, margin: 0 }}><i className="fa fa-arrow-right fs-3 pe-1"></i><i>{i.title}</i></p>

                                <p className="lead fs-35 text-justify mt-1 mx-5" style={{ paddingBottom: 10, margin: 0 }}>{i.description}</p>

                                <p className="font-monospace px-3" style={{ paddingBottom: 6, margin: 0 }}>Do it before {new Date(i.end).toLocaleDateString('en-GB')}<br /> <i>{i.importance === 1 ? "(Low Priority)" : (i.importance === 2 ? "(Medium Priority)" : "(High Priority)")}</i></p>

                                {/* <Link to={'/edit/' + i._id} className="fs-3 text-light text-end"><i className="fa fa-edit"></i></Link>
                                <Link to={'/delete/' + i._id} className="fs-3 text-light text-end ms-2"><i className="fa fa-trash"></i></Link> */}
                            </div>
                        </div>
                    </div>
                )
            }

            {users &&
                users.map((i)=>
                    <div key={i._id} className="row justify-content-center m-2 mb-3">
                        <div className="col-md-6">
                        <div className={i.role === 'user' ? "bg-secondary bg-gradient rounded text-center text-light pb-3" : "bg-info bg-gradient rounded text-center text-light pb-3"}>
                            <p>username:- {i.userName}</p>
                            {/* <p>password:- {i.password}</p> */}
                            <p>role:- {i.role}</p>
                        </div>
                        </div>
                    </div>
                )

            }
        </div>
    )
}

export default Home