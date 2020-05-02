import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppQueryParams } from './models/AppQueryParams.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  proxies: string[]=[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void
  {
    this.route.queryParams.subscribe((params: AppQueryParams)=>{
      console.log("params: ", params);
      if(params.p)
      {
        this.proxies=params.p.split(',');
      }
    });
  }
}
