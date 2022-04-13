import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outage } from '../outage';
import { OutageService } from '../outage.service';
import { Utility } from '../utility';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-report-outage',
  templateUrl: './report-outage.component.html',
  styleUrls: ['./report-outage.component.css']
})
export class ReportOutageComponent implements OnInit {

  outage: Outage = new Outage;
  utilities!: Utility[];

  constructor(private outageService: OutageService, private router: Router, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.utilityService.getUtilities().subscribe((data) => {
    this.utilities = data});
    console.log(this.utilities);
  }

  onSubmit() {
    this.outageService.addOutage(this.outage).subscribe(data => {
      this.router.navigate(['/outages'])
    });
  }

}
