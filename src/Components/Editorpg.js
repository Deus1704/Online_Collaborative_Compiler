import React, { useEffect, useRef, useState } from "react";
import Client from "./Client";
import Editor from "./Editor";
import { initSocket } from "../socket";
import ACTIONS from "../Actions";
import {useLocation} from 'react-router-dom'
function Editorpg() {
  const socketRef= useRef(null);// For not rerendering the entire file after a change
  const location= useLocation()
  useEffect(()=>{
    const init= async()=>{
      socketRef.current=await initSocket()
      // socketRef.current.emit(ACTIONS.JOIN,{
      //   roomID,
      //   username:location.state?.username,
      // })
    }
    
  },[])
  const [clients, Setclients] = useState([
    { socketId: 1, username: "Deus1704" },
    { socketId: 2, username: "Hi Kira" },
    { socketId: 3, username: "Bye" },
  ]);
  return (
    <div className="mainWrap">
      <div className="leftWrap">
        <div className="innerWrap">
          <h4>Connected Users</h4>
          <div className="clientslist">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn roomid">Copy Room ID</button>
        <button className="btn leave">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
}

export default Editorpg;
