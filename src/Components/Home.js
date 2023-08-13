import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate= useNavigate();
    const [roomID, SetroomID]= useState('');
    const [username, SetUsername]= useState('');

    const createNewRoom=(e)=>{
        e.preventDefault();
        const id= uuidv4();
        SetroomID(id);
        console.log(id);
        toast.success("Created Room");
    };
    const joinRoom=()=>{
        if (!roomID || !username) {
            toast.error("Room ID and Username is required.");
            return;
        }

        navigate(`/editor/${roomID}`,{
            state:{
                username,roomID //This is used for passing the username to this page.
            }
        })
    }
    const handleEnter=(e)=>{
        if (e.code==='Enter'){
            joinRoom();
        }
    }
  
  
    return (
    <>
        <div className='Homewrapper'>
            <div className='Formwrapper'>
                <h4 className='label mainlab'>Join a Room by pasting the Room ID</h4>
                <div className='inputgroup'>
                    <input type="text" className='inputBox' placeholder="Enter Room ID" onChange={(e)=> SetroomID(e.target.value)} value={roomID} onKeyUp={handleEnter}/>

                    <input type="text" className='inputBox' placeholder="Enter your Name" onChange={(e)=> SetUsername(e.target.value)} value={username} onKeyUp={handleEnter}/>

                    <button className='btn joinBtn' onClick={joinRoom}>Join</button>

                    <h5 className='info'>If you don't have a Room ID <a onClick={createNewRoom} href="link">click here</a></h5>
                </div>
            </div>
            <footer>
                <h4>Built with love by <a href='link'>Deus1704</a></h4>
            </footer>
        </div>
    </>
  )
}

export default Home
