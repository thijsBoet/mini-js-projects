import React, { Component } from "react";
import Chatkit from './chatkit';
import RoomList from "./components/RoomList";
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount() {
    const chatmanager = Chatkit.ChatManager()
  }

  render() {
    return (
      <div className="app">
        <RoomList/>
        <MessageList/>
        <SendMessageForm/>
        <NewRoomForm/>
      </div>
    );
  }
}

export default App;

