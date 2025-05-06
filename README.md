# Ramschema Webbutveckling – Angular-applikation

Detta projekt är en enkel **Angular-applikation** som presenterar kurser för Webbutvecklingsprogrammet i en tabell med **sorterings- och filtreringsfunktionalitet**. Kursdatan hämtas från en extern JSON-fil och visas på en sida utan sidomladdning.

## Teknisk uppbyggnad

- **Angular CLI** (standalone-komponenter)
- **HttpClient** för att hämta JSON-data
- **Data-binding** och **event-binding** för live-uppdateringar
- **Responsiv design** med CSS
- **Routing** med `@angular/router`
- Filtrering via `ngModel`
- Sortering genom klick på tabellrubriker

---

## Projektstruktur

```bash
src/
├── app/
│   ├── components/
│   │   └── course-list/
│   │       ├── course-list.component.ts
│   │       ├── course-list.component.html
│   │       └── course-list.component.css
│   ├── services/
│   │   └── course.service.ts
│   ├── models/
│   │   └── courses.ts
│   ├── app.routes.ts
│   └── app.config.ts
└── index.html
```

## Funktionalitet

### Filtrering
- Användaren kan skriva in ett sökord i ett textfält.

- Resultatet uppdateras direkt vid varje tangenttryckning.

- Filtreringen gäller kurskod och kursnamn.

### Sortering
- Klick på tabellrubriker (Kurskod, Kursnamn, Progression) sorterar tabellen.

- Sortering växlar mellan stigande och fallande ordning.

- Visuellt feedback ges vid hover och klick.
