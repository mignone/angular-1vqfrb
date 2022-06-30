import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Application } from './application';
import { APPLICATIONS } from './mock-applications';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ApplicationService {

  constructor(private messageService: MessageService) { }

  getApplications(): Observable<Application[]> {
    const applications = of(APPLICATIONS);
    this.messageService.add('DeveloperService: seen application');
    return applications;
  }

  getApplication(id: number): Observable<Application> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const application = APPLICATIONS.find(h => h.id === id)!;
    this.messageService.add(`DeveloperService: seen application id=${id}`);
    return of(application);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/