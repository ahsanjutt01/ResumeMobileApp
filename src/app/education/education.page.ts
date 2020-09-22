import { Component, OnInit } from '@angular/core';

import { CommonService } from '../_services/common.service';
import { Education } from '../_models/education';
@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {
  education: Education[];
  constructor(
    private commonService: CommonService
  ) {
    this.education = [];
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.commonService.getEducation().subscribe((data: Education[]) => {
      this.education = data;
    }, error => {
      debugger;
    });
  }
}
