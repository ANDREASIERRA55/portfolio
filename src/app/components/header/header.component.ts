import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuToglee = false
  openCloseMenu(){
    this.menuToglee = !this.menuToglee;
  }
}
