import React, { useState } from 'react';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min";
import "/node_modules/jquery/dist/jquery.min"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";

import './Home.css'

import { Button, Modal, ModalDialog, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

export default function Cards (){
    return (
        <>
        <div>
        <h6 className='pt-5'><FontAwesomeIcon className='px-2' icon={faThumbsUp}/>REcommended Groups</h6>
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

                </div>
        </div>
        </>
    )
}