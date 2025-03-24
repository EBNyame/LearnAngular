import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesService]
})
export class AppComponent {
  title = '4.ServicesDI';
  messages: string[] = []
  
  constructor(private messagesService: MessagesService){
    this.messages = messagesService.getMessages()
  }
}
