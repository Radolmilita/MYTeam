import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

import { TeamService } from '../../services/team.service';
import { TeamMember } from '../../models/team-member';
import { TeamMemberDetailsDialogComponent } from './team-members-details/team-member-details-dialog.component';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamPageComponent {
  private readonly team = inject(TeamService);
  private readonly dialog = inject(MatDialog);

  readonly coach = this.team.coach;
  readonly members = this.team.members;

  // Для бесшовной анимации делаем дубликат списка: [A..E, A..E]
  readonly membersLoop = computed(() => {
    const list = this.members();
    return list.length ? [...list, ...list] : [];
  });

  open(person: TeamMember): void {
    this.dialog.open(TeamMemberDetailsDialogComponent, {
      data: person,
      width: '720px',
      maxWidth: '95vw',
    });
  }

  refresh(): void {
    this.team.refresh();
  }

  trackByMember(_index: number, m: TeamMember): string {
    // В loop будут дубликаты id, поэтому делаем ключ стабильным по позиции+id
    return `${m.id}-${_index}`;
  }
}
