import { Component, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user: User;
  constructor() { }
}
