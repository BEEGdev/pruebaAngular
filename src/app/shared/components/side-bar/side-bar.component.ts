import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  mainMenu:{title:string, router:string[]}[] = [];

  

  ngOnInit(): void {
    this.mainMenu = [
      {
        title: 'Inicio',
        router: ['/']
      },
      {
        title: 'Calculadora',
        router: ['/homepage', 'calc']
      },
      {
        title: 'Tres en raya',
        router: ['/homepage', 'tictactoe'],
      },
    ]

  }
}
