import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utility } from '../utility';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-utility-area-choice',
  templateUrl: './utility-area-choice.component.html',
  styleUrls: ['./utility-area-choice.component.css']
})
export class UtilityAreaChoiceComponent implements OnInit {

  utilities!: Utility[];
  selectedOption!: number;

  constructor(private utilityService: UtilityService, private router: Router) {}

  ngOnInit(): void {
    this.utilityService.getUtilities().subscribe((data) => {
    this.utilities = data});
  }

  onSubmit() {
    this.router.navigate(['/utility-area/' + this.selectedOption]);
  }

}
