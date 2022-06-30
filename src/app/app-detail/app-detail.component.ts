import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: [ './app-detail.component.css' ]
})
export class AppDetailComponent implements OnInit {
  application: Application | undefined;
  data: Application | undefined;

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getApplication();
  }

  getApplication(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.applicationService.getApplication(id)
      .subscribe(application => this.application = application);
  }

  submit(): void{
    localStorage.setItem('appSession', JSON.stringify(this.application));
  }

  getSession() {
    return localStorage.getItem('appSession');
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/