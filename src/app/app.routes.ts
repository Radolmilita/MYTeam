import { Routes } from '@angular/router';
import { TeamPageComponent } from './features/team-members-page/team-page.component';

export const routes: Routes = [
  { path: '', component: TeamPageComponent },
  { path: '**', redirectTo: '' },
];
