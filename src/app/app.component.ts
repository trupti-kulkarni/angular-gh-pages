import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gh-pages-angular';
  constructor(private router: Router){}

  onclick(){
    console.log("i am clicked")
   this.router.navigate(['component1'])
  }
}
