import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactInfo: Contact = {
    name: "Andrea Sierra", 
    phone:"651 369 036", 
    email: "andreasierra103@gmail.com", 
    linkedin: "https://www.linkedin.com/in/andreasierra103/" 
  }
  
  constructor() { }
}
