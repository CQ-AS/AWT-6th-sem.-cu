import { useEffect , useState} from "react"
import { socket } from "./socket"



export default function App(){

  const[connected, setConnected]=useState("")
  const [reciverId, setReciverId]=useState("");
  const [messg, setMessg]=useState("")

  const [groupName,setGroupName]=useState("");
  const [groupMessg,setGroupMessg]=useState("")

  useEffect(()=>{
      socket.on("connect",()=>{
        setConnected("You are Connected....")

      })

      socket.on("welcome",(data)=>{
        console.log(data.messg);
      })

      socket.on("receiver-private-messg",(data)=>{
        console.log(data);
      })
      socket.on("recive-room-meesg",(data)=>{
        console.log("recive-room-meesg"+data.senderID+ " "+ data.messg);
      })

      socket.on("room-messg",(data)=>{
        console.log("room messg" )
        console.log(data)
      })

      socket.on("total-connected-users",(data:number)=>{
        console.log("Number of connected Users : "+data);
      })

      return ()=>{
        socket.off("connect")
        socket.off("room-messg")
        socket.off("recive-room-meesg")
         socket.off("receive-private-message");
         socket.off("total-connected-users");
      }

  },[])

  function handleMessgSend(){
    socket.emit("private-messg",{to:reciverId,messg:messg})
  }

  function handleGroupMessgSend(){
    socket.emit("send-messg-room",{roomName:groupName,messg:groupMessg})
  }
  function JoinRoom(){
    socket.emit("join-room",{roomName:groupName})
  }

  return(
    <>
    <h1>Socket.io Client</h1>

    <p>{connected}</p>

    <h1>Private Chat</h1>
        <input type="text" value={reciverId} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setReciverId(e.target.value )}}/>  
        <input type="text" value={messg} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setMessg(e.target.value )}}/> 

        <button onClick={handleMessgSend}>Send</button>

      <h1>Group Chat</h1>
        <input type="text" value={groupName} placeholder="Enter Room Name" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setGroupName(e.target.value )}}/>  
          <button onClick={JoinRoom}>Join Group</button>
        <input type="text" value={groupMessg} placeholder="Enter messgage to send in Group" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setGroupMessg(e.target.value )}}/> 

        <button onClick={handleGroupMessgSend}>send Messg. in Group</button>


      </>
  )

}