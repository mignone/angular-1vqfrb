import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  application: Application | undefined;

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

  submit(application: Application): void{
    localStorage.setItem('Application', JSON.stringify(application));
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