import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  isSidebarActive: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.currentSidebarState.subscribe(state => {
      this.isSidebarActive = state;
    });
  }
}