import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onChangeLanguage = new EventEmitter();

  constructor() {}

  public changeLanguage() {
    this.onChangeLanguage.emit();
  }

  ngOnInit(): void {}
}
