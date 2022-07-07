import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})
export class ChatInboxComponent implements OnInit {

  socket: any;
  constructor() { }
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
     this.socket = io;
     
  }
}
