import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IntroSplashComponent } from './features/info-splash/intro-splash.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    IntroSplashComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // интро показываем один раз на загрузку приложения
  showIntro = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'teamLogo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/team.svg'),
    );

    document.body.classList.add('intro-lock');
  }

  onIntroDone(): void {
    this.showIntro = false;
    document.body.classList.remove('intro-lock');
  }
}
