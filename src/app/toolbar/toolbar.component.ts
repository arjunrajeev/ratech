import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common/services/constants.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  mail: string;
  phone: string;

  constructor(private _constant:ConstantsService) {
    this.mail = this._constant.companyContactEmail;
    this.phone = this._constant.companyContactLandPhone;
  }
  
  ngOnInit(): void {}

}
