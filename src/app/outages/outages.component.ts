import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outage } from '../outage';
import { OutageService } from '../outage.service';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.css']
})
export class OutagesComponent implements OnInit {

  outages!: Outage[];

  constructor(private outageService: OutageService, private router: Router) { }

  ngOnInit(): void {
    this.outageService.getOutages().subscribe((data) => {
      this.outages = data;
    });
  }

  createOutage() {
    this.router.navigate(["/report-outage"]);
  }

  navigate(id: number) {
    this.router.navigate(["/outages/" + id]);
  }
}
