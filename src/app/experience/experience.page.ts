import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import { Work } from '../_models/workExperience';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {
  works: Work[];
  constructor(
    private commonService: CommonService
  ) {
    this.works = [];
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.commonService.getExperience().subscribe((data: Work[]) => {
      this.works = data;
    }, error => {
      debugger;
    });
  }

}
