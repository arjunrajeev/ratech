import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common/services/constants.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutInfo: string;
  aboutBullets: string[];
  aboutSupply: string;

  constructor(private _constant: ConstantsService) { 
    this.aboutInfo = this._constant.aboutTheCompany;
    this.aboutBullets = this._constant.aboutTheCompanyBullets;
    this.aboutSupply = this._constant.aboutTheCompanySupplies;
  }

  ngOnInit(): void {
  }

}
