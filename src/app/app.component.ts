import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>{{name}}</h1>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Pipes';
  public name = 'Group 4';
  words = 'I am a number of words. For the purpose of counting words using wordcount pipe. Adding more words'
  number = 15;
  public date = new Date();
}
