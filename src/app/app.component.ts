
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { empty } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private routes:Router){}
  id:number;
  
  run(){
    this.routes.navigate(['/colors/green',this.id]);

  }
  
}
