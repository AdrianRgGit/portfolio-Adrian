import { Component } from '@angular/core';
import {
  faHouse,
  faSuitcase,
  faPencil,
  faUser,
  faPhone,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faHouse = faHouse;
  faSuitcase = faSuitcase;
  faPencil = faPencil;
  faUser = faUser;
  faPhone = faPhone;
  faFolder = faFolder;

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
