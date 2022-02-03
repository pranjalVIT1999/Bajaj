import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
