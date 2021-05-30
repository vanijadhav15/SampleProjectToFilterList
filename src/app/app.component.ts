import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  repositories:any[];
  filterText:string;
  constructor(private appSrvc: AppService){}
  ngOnInit() {
    this.getInitialData();
  }
  getInitialData() {
    this.appSrvc.getRepositories().subscribe((result:any[]) => {
     this.repositories = result;
    })
  }
}
