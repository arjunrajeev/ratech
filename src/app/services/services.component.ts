import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../common/services/constants.service';
import { ServiceDetails } from '../common/models/service.detail.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servicesProvided: ServiceDetails[];

  constructor(private _constant: ConstantsService) {
    this.servicesProvided = this._constant.servicesProvided;
   }

  ngOnInit(): void {
  }

}
