import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';

import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { TeamMember } from 'src/app/models/team-member';


@Component({
  selector: 'app-team-member-details-dialog',
  standalone: true,
  imports: [
    DatePipe,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './team-member-details-dialog.component.html',
  styleUrl: './team-member-details-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMemberDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TeamMember) {}
}
