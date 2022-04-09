import React, { useState } from 'react';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min";
import "/node_modules/jquery/dist/jquery.min"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import Cards from './Cards'


import './Home.css'

import { Button, Modal, ModalDialog, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';



export default function Home(){
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    

    const renderCards = () => {
        if (isLoggedIn){
            return (
                <Cards/>
            )
        }
    }

    const button = () => {
        if (!isLoggedIn){
            return (
                <div className="">
                    <a className="nav-link nav-item active" onClick={handleShow} href="#">Create account. <span class="text-primarys">It’s free!</span></a>
                </div>
            )
        } else {
            return(
                <div className="">
                    <a className="nav-link nav-item active" onClick={logout} href="#">LogOut</a>
                </div>
            )
        }
    }

    
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                
                <div className="">
                    <a className="navbar-brand" href="#"><span className="text-success">ATG</span>WORLD</a>
                </div>

                <div className="">
                    <form className="form-inline  my-lg-0">
                        <input className="form-control search" type="search" placeholder="Search for your favorite groups in ATG" size="40" aria-label="Search"/>
                    </form>
                </div>

                {button()}

  
                <Modal  size="lg" show={show} onHide={handleClose} centered>
                <div id='modal-title' className=''>
                <Modal.Header closeButton>
                <Modal.Title ><p className="title1" >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p></Modal.Title>
               
                </Modal.Header>
                </div>
                <Modal.Body>
                    <div className='row'>
                        <div className='col'>
                            <h3 className='pb-4'><b>Create Account</b></h3>

                            <form>
                                <div class="form-row">
                                <div class="form-group col-md-12">
                                <div className='row'>
                                    <div className='col'>
                                        <input type="text" class="form-control d-inline" id="inputEmail4" placeholder="First Name"/>
                                    </div>
                                     <div className='col'>
                                        <input type="text" class="form-control d-inline" id="inputEmail4" placeholder="Last Name"/>
                                     </div>
                                </div>
     
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password"/>
      
                                </div>

                                <div className='form-group col-md-12 button p-3'>
                                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => {login(); handleCloseLogin(); handleClose();}}>Create Account</button>
                                 </div>

                                <div className='pt-3 px-5'>
                                        <button type="button" class="btn btn-outline-light text-dark  btn-block p-3"><FontAwesomeIcon className='px-2 text-primary' icon={faFacebook}/>Sign up with Facebook</button>
                                </div>

                                <div className='px-5'>
                                    <button type="button" class="btn btn-outline-light text-dark  btn-block p-3"><FontAwesomeIcon className='px-2' icon={faGoogle}/>Sign up with Google</button>
                                </div>
    
                                </div>
                            </form>

                           

                        </div>
                        


                        <div className='col text-left'>
                            <p>Already have an account? <span className='text-primary'><a href='#'  className='text-primary' onClick={handleShowLogin}>Sign In</a></span></p>

                            <Modal  size="lg" show={showLogin} onHide={handleCloseLogin} centered>
                                <div id='modal-title' className=''>
                                <Modal.Header closeButton>
                                <Modal.Title ><p className="title1" >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p></Modal.Title>
               
                                </Modal.Header>
                                 </div>
                                <Modal.Body>
                                    <div className='row'>
                                        <div className='col'>
                                            <h3><b>Sign In</b></h3>

                                    <form>
                                        <div class="form-group col-md-12 py-3">
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                        </div>
                                        <div class="form-group col-md-12 py-3">
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                                        </div>
    
                                       
                                    </form>

                                    <div className='p-3'>
                                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => {login(); handleCloseLogin(); handleClose();}}>Sing in</button>
                                    </div>

                                    <div className='pt-3 px-5'>
                                        <button type="button" class="btn btn-outline-light text-dark  btn-block p-3"><FontAwesomeIcon className='px-2 text-primary' icon={faFacebook}/>Sign up with Facebook</button>
                                    </div>

                                    <div className='px-5'>
                                        <button type="button" class="btn btn-outline-light text-dark  btn-block p-3"><FontAwesomeIcon className='px-2' icon={faGoogle}/>Sign up with Google</button>
                                    </div>

                                    <div className='text-center p-3'>
                                        <p>Forgot Password?</p>
                                    </div>

                                    

                        </div>
                        


                                    <div className='col text-left'>
                                        <p>Already have an account? <span className='text-primary'><a href='#'  className='text-primary' onClick={handleCloseLogin} >Sign In</a></span></p>
                                        <img src='Group 3.png'/>
                                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                    </div>
                                </Modal.Body>
                                </Modal>

                            <img src='Group 3.png'/>
                            
                        </div>
                    </div>
                </Modal.Body>
                </Modal>

            </nav>
                
        </div>

        <div>
            <img src="Rectangle2.png"/>
        </div>

        <div className="row" id="nav2">
            
            <div className="col-8">
                <a className="nav-link text-dark d-inline" href="#">All Posts(32)</a>
                <a className="nav-link text-dark d-inline" href="#">Article</a>
                <a clclassNameass="nav-link text-dark d-inline" href="#">Event</a>
                <a className="nav-link text-dark d-inline" href="#">Education</a>
                <a className="nav-link text-dark d-inline" href="#">Job</a>
            </div>

            <div className="col-4 pb-2">
               
                <a className="nav-link dropdown-toggle text-dark d-inline" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>

                <button type="button" className="btn btn-primary d-inline">Join Group</button>
                
            </div>
        </div>


        <div className="row" id="cards">
            <div className="col-8" id="card1">
                <div className="card">
                    <img class="card-img-top" src="Rectangle 5-2.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">✍️ Article</h5>
                        <h5><b>What if famous brands had regular fonts? Meet RegulaBrands!</b></h5>
                        <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        
                    </div>
                    <div className="row pb-4">
                        <div className="col">
                            <img className="d-inline px-3" src="Rectangle 3-1.png"/>
                            <p  className="d-inline px-3"><b>Sarthak Kamra</b></p>
                        </div>

                        <div className="col">
                        <p className="d-inline px-1"><FontAwesomeIcon icon={faEye}/></p>
                        <p className="d-inline px-1"> 1.4k views</p>
                        <p className="d-inline px-5" ><FontAwesomeIcon icon={faShareNodes}/></p>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="col-4" id="card2">
                <div id="box">
                <p className="d-inline px-1"><FontAwesomeIcon icon={faLocationDot}/></p>
                <p className="d-inline pr-5">Noida, India</p>
                <p className="d-inline px-5"><FontAwesomeIcon icon={faPen}/></p>
                </div>
                <p className='text-muted pt-4'>Your location will help us serve better and extend a personalised experience.</p>

                {renderCards()}
                
                {/* <h6 className='pt-5'><FontAwesomeIcon className='px-2' icon={faThumbsUp}/>REcommended Groups</h6>
                <div className='row'>
                    <div className='col py-3'>
                        <div className='d-flex justify-content-between py-2'>
                        <div>
                        <img className='px-3' src='Rectangle 6-1.png'/>
                        <p className='py-3 d-inline'>Leisure</p>
                        </div>
                        <div className='py-2 d-inline bt'><button type="button" class="btn btn-outline-secondary buttons p-1 pb-2">Follow</button></div>
                        </div>
                        <div className='d-flex justify-content-between py-2'>
                        <div>
                        <img className='px-3' src='Rectangle 6-2.png'/>
                        <p className='py-3 d-inline'>Leisure</p>
                        </div>
                        <div className='py-2 d-inline'><button type="button" class="btn btn-outline-secondary buttons p-1 pb-2">Follow</button></div>
                        </div>
                        <div className='d-flex justify-content-between py-2'>
                        <div>
                        <img className='px-3' src='Rectangle 6-3.png'/>
                        <p className='py-3 d-inline'>Leisure</p>
                        </div>
                        <div className='py-2 d-inline'><button type="button" class="btn btn-outline-secondary buttons p-1 pb-2">Follow</button></div>
                        </div>
                        <div className='d-flex justify-content-between py-2'>
                        <div>
                        <img className='px-3' src='Rectangle 6.png'/>
                        <p className='py-3 d-inline'>Leisure</p>
                        </div>

                        <div className='py-2 d-inline'><button type="button" class="btn btn-outline-secondary buttons p-1 pb-2">Follow</button></div>
                        </div>
                    </div>

                </div> */}
            </div>
   
        </div>

        <div className="row" id="cards">
            <div className="col-8" id="card1">
                <div className="card">
                    <img class="card-img-top" src="Rectangle 5.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">✍️ Article</h5>
                        <h5><b>What if famous brands had regular fonts? Meet RegulaBrands!</b></h5>
                        <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        
                    </div>
                    <div className="row pb-4">
                        <div className="col">
                            <img className="d-inline px-3" src="Rectangle 3-1.png"/>
                            <p  className="d-inline px-3"><b>Sarthak Kamra</b></p>
                        </div>

                        <div className="col">
                        <p className="d-inline px-1"><FontAwesomeIcon icon={faEye}/></p>
                        <p className="d-inline px-1"> 1.4k views</p>
                        <p className="d-inline px-5" ><FontAwesomeIcon icon={faShareNodes}/></p>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="col-4" id="card2"></div>
   
        </div>

        <div className="row" id="cards">
            <div className="col-8" id="card1">
                <div className="card">
                    <img class="card-img-top" src="Rectangle 5-1.png" alt="Card image cap"/>
                    <div className="card-body">

                        <h5 className="card-title">✍️ Article</h5>
                        <h5><b>What if famous brands had regular fonts? Meet RegulaBrands!</b></h5>
                        <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        
                    </div>
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block">Visit Website</button>
                    <div className="row pb-4 box3">
                        <div className="col">
                            <img className="d-inline px-3" src="Rectangle 3-1.png"/>
                            <p  className="d-inline px-3"><b>Sarthak Kamra</b></p>
                        </div>

                        <div className="col">
                        <p className="d-inline px-1"><FontAwesomeIcon icon={faEye}/></p>
                        <p className="d-inline px-1"> 1.4k views</p>
                        <p className="d-inline px-5" ><FontAwesomeIcon icon={faShareNodes}/></p>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="col-4" id="card2">
                
            </div>
   
        </div>


        <div className="row" id="cards">
            <div className="col-8" id="card1">
                <div className="card">
                   
                    <div className="card-body">
                        <h5 className="card-title">✍️ Article</h5>
                        <h5><b>What if famous brands had regular fonts? Meet RegulaBrands!</b></h5>
                        <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        
                    </div>
                    <button type="button" className="btn btn-outline-success btn-lg btn-block">Visit Website</button>
                    <div className="row pb-4 box3">
                        <div className="col">
                            <img className="d-inline px-3" src="Rectangle 3-1.png"/>
                            <p  className="d-inline px-3"><b>Sarthak Kamra</b></p>
                        </div>

                        <div className="col">
                        <p className="d-inline px-1"><FontAwesomeIcon icon={faEye}/></p>
                        <p className="d-inline px-1"> 1.4k views</p>
                        <p className="d-inline px-5" ><FontAwesomeIcon icon={faShareNodes}/></p>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="col-4" id="card2">
                
            </div>
   
        </div>


        </>


    )
}