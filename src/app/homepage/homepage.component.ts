import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  infoCards:any[]=[{
    title: 'calculadora',
    path:'/calc'
  },
  {
    title: 'tres en raya',
    path: '/tictactoe'
  }
]



}
