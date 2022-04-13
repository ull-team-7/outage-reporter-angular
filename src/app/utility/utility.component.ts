import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utility } from '../utility';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {

  utilities!: Utility[];

  constructor(private utilityService: UtilityService, private router: Router) {}

  ngOnInit(): void {
    this.utilityService.getUtilities().subscribe((data) => {
      this.utilities = data;
    });
  }

  createUtilities() {
    this.router.navigate(["create-utility"]);
  }
}
