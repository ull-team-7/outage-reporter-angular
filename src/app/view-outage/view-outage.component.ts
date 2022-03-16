import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outage } from '../outage';
import { OutageService } from '../outage.service';

@Component({
  selector: 'app-view-outage',
  templateUrl: './view-outage.component.html',
  styleUrls: ['./view-outage.component.css']
})
export class ViewOutageComponent implements OnInit {
  outage: Outage = new Outage();
  id!: number;

  constructor(private outageService: OutageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //if (this.route.snapshot.paramMap.has("id")) {
      this.id = +this.route.snapshot.paramMap.get("id")!;
    //}
    this.outageService.getOutage(this.id).subscribe((data) => {
      this.outage = data;
    });
  }

  delete(): void {
    this.outageService.deleteOutage(this.id).subscribe();
    this.router.navigate(["/outages"]);
  }
}
