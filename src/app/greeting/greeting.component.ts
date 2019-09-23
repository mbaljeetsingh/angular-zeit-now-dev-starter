import { Component, OnInit } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  hello;
  todos;
  constructor(private greetingService: GreetingService) {}

  ngOnInit() {
    this.greetingService.getMessage().subscribe(data => {
      console.log(data);
      this.hello = data;
    });
    this.greetingService.getTodos().subscribe(data => {
      console.log(data);
      this.todos = data;
    });
  }
}
