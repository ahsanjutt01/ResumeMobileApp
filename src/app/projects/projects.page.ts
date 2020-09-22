import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: Project[];
  constructor(
    private commonService: CommonService
  ) {
    this.projects = [];
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.commonService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    }, error => {
      debugger;
    });
  }
}
