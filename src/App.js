import { useEffect, useState } from "react";
import useWebSocket, { useSocketIO } from "react-use-websocket";
import { socket } from "./services/socket";

const URL = "wss://fstream.binance.com";
function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   function onFooEvent(value) {
  //     setData((previous) => [...previous, value]);
  //   }
  //   socket.on("foo", onFooEvent);
  // }, []);
  // const { sendJsonMessage, getWebSocket } = useWebSocket(URL, {
  //   onOpen: () => console.log("WebSocket connection opened."),
  //   shouldReconnect: (closeEvent) => true,
  //   onMessage: (event) => setData(event),
  // });
  // console.log(data);
  return <main>test</main>;
}

export default App;
