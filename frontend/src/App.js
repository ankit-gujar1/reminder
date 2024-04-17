import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import axios from "axios";
import Footer from "./components/Footer";

function App() {

  // const url="https://reminder-3jth.onrender.com/";
  const url="http://localhost:8080/";

  const navigate = useNavigate();

  const [task, setTask] = useState();

  // const [color,setColor]=useState();

  const { user } = useAuthContext();

  // console.log(x)
  useEffect(() => {
    // const u=JSON.parse(localStorage.getItem('user'));
    // console.log("hii from App.js");
    if (!user) {
      navigate('/login');
      return;
    }
    
    console.log(user.role)
    if(user.role!=='user'){
      navigate('/admin/home');
      return;
    }

    axios.get(url, { headers: { Authorization: 'Bearer ' + user.token } })
      .then((r) => {
        setTask(r.data);
      })
      .catch((e) => {
        console.log(e);
      })


  }, [user])

  return (
    <div>
      <Navbar />
      <div className="text-center mt-3">
        {user && <h1>welcome {user.userName}</h1>}
        <Link className="btn btn-dark btn-block px-5 py-2" to={'/add'}>Add Task</Link>
        <h3 className="text-center my-3">All Tasks</h3>
      </div>
      {task &&
        task.map((i) => //key should be in outer most div of .map
          <div key={i._id} className="row justify-content-center m-2 mb-3">
            <div className="col-md-5">
              <div className={i.importance===1?"bg-success bg-gradient rounded text-center text-light pb-3":(i.importance===2?"bg-primary bg-gradient  rounded text-center text-light pb-3":"bg-danger bg-gradient rounded text-center text-light pb-3")}>
                
                <p className="fs-4 px-2" style={{ paddingTop: 10, margin: 0 }}><i className="fa fa-arrow-right fs-4 pe-1"></i><b>{i.title}</b></p>
                
                <p className="fs-6 fw-normal text-justify mt-1 mx-5"  style={{ paddingBottom: 10, margin: 0 }}>{i.description}</p>
                
                <p className="font-monospace px-3" style={{ paddingBottom: 6, margin: 0 }}>Do it before {new Date(i.end).toLocaleDateString('en-GB')}<br/> <i>{i.importance===1?"(Low Priority)":(i.importance===2?"(Medium Priority)":"(High Priority)")}</i></p>
                <Link to={'/edit/'+i._id} className="fs-3 text-light text-end"><i className="fa fa-edit"></i></Link>
                <Link to={'/delete/'+i._id} className="fs-3 text-light text-end ms-2"><i className="fa fa-trash"></i></Link>
              </div>
            </div>
          </div>
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
