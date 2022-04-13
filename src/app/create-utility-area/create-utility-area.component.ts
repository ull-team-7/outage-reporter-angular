import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utility } from '../utility';
import { UtilityArea } from '../utility-area';
import { UtilityAreaService } from '../utility-area.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-create-utility-area',
  templateUrl: './create-utility-area.component.html',
  styleUrls: ['./create-utility-area.component.css']
})
export class CreateUtilityAreaComponent implements OnInit {

  utilityId!: number;
  utilities!: Utility[];
  utilityArea: UtilityArea = new UtilityArea;

  constructor(private utilityAreaService: UtilityAreaService, private utilityService: UtilityService, private router: Router) {}

  ngOnInit(): void {
    this.utilityService.getUtilities().subscribe((data) => {
      this.utilities = data});
    this.utilityArea.outageStatus = false;
  }

  onSubmit() {
    this.utilityAreaService.addUtilityArea(this.utilityId, this.utilityArea).subscribe(data => {
      this.router.navigate(['/utility-area/' + this.utilityId])
    });
  }

}
