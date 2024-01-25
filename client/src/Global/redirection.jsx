import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {url} from './URL';
import Loader from '../components/Loader';


const RedirectionPage = () => {

    const {accessToken} = useParams();
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const data = await axios.post(url + "/anyuser", {accessToken});
            navigate('/home');           
        } catch (error) {
            console.log(error);
            localStorage.removeItem('IMPaccessToken');
            window.location.href = url + "/login";
        }
    }
    useEffect(()=>{
        localStorage.setItem('IMPaccessToken', accessToken);
        getUser();
    });

    return (
        <div style={{ height: '100%', width: '100%', minHeight: '100%', maxWidth: '100%', maxHeight: '100%', overflowY: 'hidden', padding: 10}}>
            {accessToken}
            <Loader/>
        </div>
    );
};

export default RedirectionPage;
