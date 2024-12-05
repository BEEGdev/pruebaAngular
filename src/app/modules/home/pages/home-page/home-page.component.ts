import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomepageComponent implements OnInit {
  
  showWelcomeMessage: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      // Cambia la visibilidad según la ruta activa
      this.showWelcomeMessage = this.router.url === '/homepage';
    });
  }



}
