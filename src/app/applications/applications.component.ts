import { Component, OnInit } from '@angular/core';

import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications(): void {
    this.applicationService.getApplications()
    .subscribe(applications => this.applications = applications);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/