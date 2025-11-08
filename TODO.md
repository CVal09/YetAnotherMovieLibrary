# 🧾 TODO — Yet Another Movie Library
Versione: pre-release v1.0 (web)

Questo file elenca le ultime correzioni, ottimizzazioni e aggiunte da completare
prima di congelare la versione web e passare alla suddivisione `settings/`, `web/`, `mobile`.

---

## 🐞 Correzioni e controlli
- [X] Verificare che tutti i `useSelector` puntino alle chiavi di stato aggiornate (`popularContent`, `searchResults`, `foundSingleContent`).
- [X] Rimuovere completamente le vecchie funzioni sincrone (`manageMovies`, `manageShows`) e le variabili collegate (`popularContentList`).
- [X] Controllare in `tmdbSlice.js` che ogni campo `vote_average` venga validato prima del `toFixed(1)`.
- [X] In `manageContent`, assicurarsi che il payload sia **sempre un oggetto singolo**, non un array `.results`. Aggiungere un controllo di sicurezza.
- [X] Aggiornare i percorsi degli import dopo ogni rinomina (API, store, ecc.).

---

## ⚙️ Migliorie logiche
- [X] Rinominare `popularContentResult` → `popularContent` per maggiore chiarezza semantica.
- [X] Introdurre controllo in `Home.jsx` per evitare re-fetch:  
    ```js
    if (!popularContent.length) dispatch(fetchPopular())
- [ ] Implementare Reselect o una semplice funzione memoizzata per:
    - selectMovies
    - selectShows
    - selectHeroItem (estrazione random stabilizzata)
- [X] Standardizzare la forma dei dati TMDB in un normalizzatore unico (normalizeContent(item, type)).
- [X] Spostare in una costante centralizzata (config.js) la base URL immagini e le dimensioni (POSTER_SIZE, BACKDROP_SIZE).

## Migliorie UI/UX
- [ ] Collegare isLoading ed error ai componenti Home e ShowResults:
    - Loader o skeleton per la griglia (ContentView)
    - Messaggio user-friendly in caso di errore o risultati vuoti
- [X] Impostare dimensioni ottimali delle immagini:
    - Poster → w342 o w500
    - Backdrop → w780 o w1280
- [X] Inserire alt={title} su ogni immagine.
- [X] Gestire background dinamico in Hero con sfumatura o overlay per leggibilità del testo.
- [ ] Verificare responsività minima per schermi piccoli.

## Refactoring preparatorio
- [ ] Spostare cartelle api/ e store/ in una nuova directory settings/ (verrà condivisa tra web e mobile).
- [ ] Aggiornare tutti gli import relativi in web/ dopo lo spostamento.
- [ ] Aggiungere README con spiegazione breve dell’architettura (settings, web, mobile).
- [ ] Impostare una tag di commit: git tag -a v1.0-stable-web -m "Versione stabile base web"
- [ ] (Facoltativo) Configurare npm workspaces o pnpm workspaces in previsione del monorepo.

## Idee future
- [ ] Sezioni aggiuntive: “Top Rated”, “Trending”, “Now Playing”.
- [ ] Dettagli avanzati contenuto: cast, generi, durata, data rilascio.
- [ ] Paginazione o infinite scroll nei risultati.
- [ ] Gestione preferiti/localStorage.
- [ ] Modalità scura/chiara con toggle globale.
- [ ] Migrazione a TailwindCSS per semplificare la gestione stili.
- [ ] Versione mobile (React Native) con store e API condivisi (settings).