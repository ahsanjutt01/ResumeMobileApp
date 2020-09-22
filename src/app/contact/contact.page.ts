import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import { Contact } from '../_models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact: Contact;
  constructor(
    private commonService: CommonService
  ) {
    this.contact =  new Contact();
  }

  ngOnInit() {
  }
  onSend() {
    this.commonService.sendMsg(this.contact).subscribe(data => {
    this.contact =  new Contact();
    }, error => {
      debugger;
    })
  }

}
