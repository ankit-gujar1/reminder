import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="row justify-content-center m-5">
                <div className="col-md-6 shadow pb-4 p-3 bg-body rounded">
                <h3>I'm Rodrigues</h3>
                <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla
                  rerum doloribus qui, neque placeat veniam est deserunt eum aperiam quia, ab
                  fuga sed? Commodi laboriosam nulla hic amet sint.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}
