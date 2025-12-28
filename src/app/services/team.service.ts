import { Injectable, signal } from "@angular/core";
import { TeamMember } from "../models/team-member";
import { TEAM_COACHES, TEAM_MEMBERS } from "../models/team-mock-data";

@Injectable({ providedIn: "root" })
export class TeamService {
  private readonly _coaches = signal<TeamMember[]>([...TEAM_COACHES]);
  private readonly _members = signal<TeamMember[]>([...TEAM_MEMBERS]);

  readonly coaches = this._coaches.asReadonly();
  readonly members = this._members.asReadonly();

  refresh(): void {
    this._members.set([]);
    this._coaches.set([]);
    setTimeout(() => {
      this._coaches.set([...TEAM_COACHES]);
      this._members.set([...TEAM_MEMBERS]);
    }, 200);
  }
}
