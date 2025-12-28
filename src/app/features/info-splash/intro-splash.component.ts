import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const INTRO_MS = 7000;

@Component({
  selector: 'app-intro-splash',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './intro-splash.component.html',
  styleUrl: './intro-splash.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroSplashComponent implements OnInit, OnDestroy {
  @Output() done = new EventEmitter<void>();

  private timerId: number | undefined;

  ngOnInit(): void {
    this.timerId = window.setTimeout(() => this.done.emit(), INTRO_MS);
  }

  ngOnDestroy(): void {
    if (this.timerId) window.clearTimeout(this.timerId);
  }
}
