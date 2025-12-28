import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  ViewChild,
  computed,
  inject,
  signal,
} from "@angular/core";
import { NgFor, NgIf } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";

import { fromEvent, merge } from "rxjs";
import { auditTime, startWith } from "rxjs/operators";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { TeamService } from "../../services/team.service";
import { TeamMember } from "../../models/team-member";
import { TeamMemberDetailsDialogComponent } from "./team-members-details/team-member-details-dialog.component";

@Component({
  selector: "app-team-page",
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
  templateUrl: "./team-page.component.html",
  styleUrl: "./team-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[style.--p]": "scrollP()",
  },
})
export class TeamPageComponent implements AfterViewInit {
  private readonly team = inject(TeamService);
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild("scrollStage", { static: true }) scrollStage!: ElementRef<HTMLElement>;

  readonly coaches = this.team.coaches;
  readonly members = this.team.members;

  // progress 0..1 (0 = коучи, 1 = участники + черный фон)
  readonly scrollP = signal(0);

  // Для бесшовной “витрины”
  readonly membersLoop = computed(() => {
    const list = this.members();
    return list.length ? [...list, ...list] : [];
  });

  ngAfterViewInit(): void {
    merge(
      fromEvent(window, "scroll", { passive: true } as AddEventListenerOptions),
      fromEvent(window, "resize", { passive: true } as AddEventListenerOptions),
    )
      .pipe(auditTime(16), startWith(0), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateScrollProgress());

    this.updateScrollProgress();
  }

  private updateScrollProgress(): void {
    const el = this.scrollStage?.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const stageTop = window.scrollY + rect.top;
    const stageHeight = el.offsetHeight;
    const viewportH = window.innerHeight;

    const maxScroll = Math.max(1, stageHeight - viewportH);
    const raw = (window.scrollY - stageTop) / maxScroll;

    const p = clamp(raw * 1.35, 0, 1);
    this.scrollP.set(p);
  }

  open(person: TeamMember): void {
    this.dialog.open(TeamMemberDetailsDialogComponent, {
      data: person,
      width: "720px",
      maxWidth: "95vw",
    });
  }

  refresh(): void {
    this.team.refresh();
  }

  trackByMember(_index: number, m: TeamMember): string {
    return `${m.id}-${_index}`;
  }

  trackByCoach(_index: number, c: TeamMember): number {
    return c.id;
  }
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}
