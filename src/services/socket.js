import { io } from "socket.io-client";
const URL = "wss://fstream.binance.com";

export const socket = io(URL, {
  extraHeaders: {
    Request: {
      result: null,
      id: 1,
      method: "SUBSCRIBE",
      params: ["!ticker@arr"],
    },
  },
});
