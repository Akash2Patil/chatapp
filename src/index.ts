import { JSDocParsingMode } from "typescript";
import {WebSocketServer, WebSocket} from "ws";

const wss = new WebSocketServer({port:8080});
interface User {
    socket : WebSocket;
    room : String
}

let allSockets : User[] = [];

wss.on("connection", (socket)=>{
    socket.on("message",(message)=>{
        //@ts-ignore
        const parsedMessage = JSON.parse(message)
        if(parsedMessage.type == "join"){
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if(parsedMessage.type == "chat"){
            const currentuserRoom =  allSockets.find((x)=>x.socket == socket)
        }



    })

})