import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registerMode = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.model).subscribe(res => {
      console.log('registered successful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.registerMode.emit(false);
    console.log('cannceled');
  }
}
