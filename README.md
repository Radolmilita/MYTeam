# angular-material-mock-skeleton

Минимальный скелет Angular-приложения на актуальной мажорной версии (Angular v21) с Angular Material и мок-данными из `src/app/mock-data.ts`.

## Требования
- Node.js (рекомендуется LTS). Angular v21 требует Node 20+ (или новее).  
  См. требования в официальной таблице совместимости Angular. 

## Запуск
```bash
npm install
npm start
```
Откройте: http://localhost:4200

## Где мок-данные
- `src/app/mock-data.ts` — массив данных
- `src/app/services/mock-data.service.ts` — сервис, который "симулирует" загрузку и предоставляет данные через `signal()`

## UI
Используется Angular Material (toolbar, table, dialog, form-field/input, buttons).
