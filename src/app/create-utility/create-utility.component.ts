import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utility } from '../utility';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-create-utility',
  templateUrl: './create-utility.component.html',
  styleUrls: ['./create-utility.component.css']
})
export class CreateUtilityComponent implements OnInit {

  utility: Utility = new Utility;

  constructor(private utilityService: UtilityService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.utilityService.addUtility(this.utility).subscribe(data => {
      this.router.navigate(['/utility'])
    });
  }

}
