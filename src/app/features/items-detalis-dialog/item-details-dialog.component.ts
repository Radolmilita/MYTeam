import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { Item } from '../../models/item';

@Component({
  selector: 'app-item-details-dialog',
  standalone: true,
  imports: [DatePipe, MatDialogModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './item-details-dialog.component.html',
  styleUrl: './item-details-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item) {}
}
