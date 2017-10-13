import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: 'chuck@kang.com', important: true, subject: 'Ping Pong Practice', content: 'Practice starts at 6am!'},
    {email: 'rod@rigo.com', important: true, subject: '1v1?', content: 'Come at me bro'},
    {email: 'neo@matrix.com', important: true, subject: 'Pill?', content: 'Red or Blue?'},
  ]
}
