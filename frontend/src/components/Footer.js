import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div class="footer navbar-fixed-bottom">
            <footer class="my-1">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: "black" }} aria-current="page" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: "black" }} aria-current="page" to={'/add'}>Add Task</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: "black" }} aria-current="page" to={'/highpriority'}>Important Task</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{ color: "black" }} aria-current="page" to={'/about'}>About</Link>
                    </li>
                </ul>
                <p class="text-center text-muted">Made by Ankit Gujar</p>
            </footer>
        </div>
    )
}
