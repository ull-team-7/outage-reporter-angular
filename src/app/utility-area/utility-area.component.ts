import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utility } from '../utility';
import { UtilityArea } from '../utility-area';
import { UtilityAreaService } from '../utility-area.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-utility-area',
  templateUrl: './utility-area.component.html',
  styleUrls: ['./utility-area.component.css']
})
export class UtilityAreaComponent implements OnInit {

  utilityId!: number;
  utility!: Utility;
  utilityAreas!: UtilityArea[];

  constructor(private utilityService: UtilityService, utilityAreaService: UtilityAreaService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.utilityId = + this.route.snapshot.paramMap.get("id")!;

    this.utilityService.getUtility(this.utilityId).subscribe((data) => {
      this.utility = data;
      this.utilityAreas = this.utility.utilityAreas;
    });
  }

  createAreas() {
    this.router.navigate(["create-utility-area"]);
  }
}
