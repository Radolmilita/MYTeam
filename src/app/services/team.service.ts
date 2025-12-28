import { Injectable, signal } from '@angular/core';
import { TeamMember } from '../models/team-member';
import { TEAM_COACH, TEAM_MEMBERS } from '../models/team-mock-data';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private readonly _coach = signal<TeamMember>(TEAM_COACH);
  private readonly _members = signal<TeamMember[]>([...TEAM_MEMBERS]);

  readonly coach = this._coach.asReadonly();
  readonly members = this._members.asReadonly();

  refresh(): void {
    // небольшая имитация “загрузки”
    this._members.set([]);
    setTimeout(() => {
      this._coach.set(TEAM_COACH);
      this._members.set([...TEAM_MEMBERS]);
    }, 200);
  }
}
