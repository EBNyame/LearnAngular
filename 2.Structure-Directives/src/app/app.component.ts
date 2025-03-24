import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2.Structure-Directives';

  names: string [] = ['Anas', 'Exo', 'Joe', 'Vee', 'Theo']
  grade: string = "f"

  userName: string = "Exodus";
  isLoggedIn: boolean = false

  okay: string = "text-size bgColor"
  
}
