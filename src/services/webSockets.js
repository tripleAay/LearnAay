// class WebSocketService {
//     constructor(url) {
//         this.socket = new WebSocket(url);
//         this.callbacks = {};
//     }

//     connect() {
//         this.socket.onopen = () => console.log('WebSocket connected');
//         this.socket.onclose = () => console.log('WebSocket disconnected');
//         this.socket.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             if (this.callbacks[data.type]) {
//                 this.callbacks[data.type](data.payload);
//             }
//         };
//     }

//     on(eventType, callback) {
//         this.callbacks[eventType] = callback;
//     }

//     send(eventType, payload) {
//         this.socket.send(JSON.stringify({ type: eventType, payload }));
//     }
// }

// const socketService = new WebSocketService('ws://localhost:5000/ws');
// export default socketService;
