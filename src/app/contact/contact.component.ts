import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common/services/constants.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mail: string;
  phone: string;
  address: string;
  location: string;

  constructor(private _constant: ConstantsService) { 
    this.mail = this._constant.companyContactEmail;
    this.phone = this._constant.companyContactLandPhone;
    this.address = this._constant.companyContactAddress;
    this.location = this._constant.companyContactLocation;
  }

  ngOnInit(): void {
  }

}
