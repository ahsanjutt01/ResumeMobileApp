import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import { Profile } from '../_models/profile';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  profile: Profile;
  constructor(
    private commonService: CommonService
  ) {
    this.profile = new Profile();
   }

  ngOnInit() { }

  ionViewDidEnter() {
    this.commonService.getProfile().subscribe((data: Profile) => {
      this.profile = data;
    }, error => {
      debugger;
    });
  }

}
