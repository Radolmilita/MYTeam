import { Injectable, signal } from '@angular/core';
import { Item } from '../models/item';
import { MOCK_ITEMS } from '../mock-data';

/**
 * Mock-источник данных без бекенда.
 * Данные лежат в mock-data.ts и "загружаются" с небольшой задержкой.
 */
@Injectable({ providedIn: 'root' })
export class MockDataService {
  private readonly _items = signal<Item[]>([...MOCK_ITEMS]);

  /** Readonly signal для компонентов */
  readonly items = this._items.asReadonly();

  /** Симуляция "перезагрузки" данных */
  refresh(): void {
    // Сначала очищаем, чтобы было видно "загрузку"
    this._items.set([]);

    // Через небольшую задержку "приходят" данные
    setTimeout(() => {
      this._items.set([...MOCK_ITEMS]);
    }, 250);
  }
}
