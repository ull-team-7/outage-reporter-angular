import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outage } from '../outage';
import { OutageService } from '../outage.service';

@Component({
  selector: 'app-report-outage',
  templateUrl: './report-outage.component.html',
  styleUrls: ['./report-outage.component.css']
})
export class ReportOutageComponent implements OnInit {

  outage: Outage = new Outage;

  constructor(private outageService: OutageService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.outageService.addOutage(this.outage).subscribe(data => {
      this.router.navigate(['/outages'])
    });
  }

}
