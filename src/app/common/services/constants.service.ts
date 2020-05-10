import { Injectable } from '@angular/core';
import { ServiceDetails } from '../models/service.detail.model';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly companyContactEmail: string = 'info@ratechservices.in';
  readonly companyContactLandPhone: string = '+91 85472 99510';
  readonly companyContactAddress: string = 'Ra Technical Services Pvt Ltd, 8/555 Kodumba, Palakkad, Kerala 678551';
  readonly companyContactLocation: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31359.179571362532!2d76.67573417108248!3d10.742386810047929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86c56aaaaaaab%3A0xc7330273cd606d6a!2sRa%20Technical%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1589113244472!5m2!1sen!2sin';

  readonly aboutTheCompany: string = 'Established in 2016, Ra Technical Services is an IBR approved service provider in the field of Boiler Services providing turn key solutions to cater: ';
  
  readonly aboutTheCompanyBullets: string[] =[
    'Steam and Process piping', 
    'Vessels and Structural fabrications', 
    'Water and Waste water treatment'
  ];

  readonly aboutTheCompanySupplies: string = 'We supply Water and waste water treatment plants, Steam engineering products, Calorifiers and speciality chemicals for water treatment of Boilers, RO Plants, Cooling Water systems and Waste Water treatment systems.'

  readonly servicesProvided: ServiceDetails[] = [
    {
      service: 'Supply installation of equipments',
      icon: 'bx bxs-package'
    },
    {
      service: 'Design fabrication of steam and process piping',
      icon: 'bx bx-abacus'
    },
    {
      service: 'Water and Waste water treatment plants',
      icon: 'bx bx-water'
    },
    {
      service: 'Repair and Maintenance of boilers and heat exchangers',
      icon: 'bx bxs-briefcase-alt-2'
    },
    {
      service: 'Status check of equipments, Flue gas analysis',
      icon: 'bx bx-list-check'
    },
    {
      service: 'Preparation of annual inspection and shutdown maintenance of boilers',
      icon: 'bx bx-calendar-event'
    }
  ]

}
