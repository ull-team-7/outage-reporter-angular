import { Component, OnInit } from '@angular/core';
import { Outage } from '../outage';
import { OutageService } from '../outage.service';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.css']
})
export class OutagesComponent implements OnInit {

  outages!: Outage[];

  constructor(private outageService: OutageService) { }

  ngOnInit(): void {
    this.outageService.getOutages().subscribe((data) => {
      this.outages = data;
    });
  }

}
