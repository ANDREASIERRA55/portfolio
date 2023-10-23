import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuToglee = false
  name?="";
  constructor(contactService: ContactService){this.name = contactService.contactInfo.name}
  openCloseMenu(){
    this.menuToglee = !this.menuToglee;
  }
}
