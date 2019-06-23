# TypeScript type definitions for the Riot API
Purely the response structures returned by various components from https://developer.riotgames.com/api-methods/.

To install the package, run
```sh
npm install --save-dev riot-api-typedef
```

The interfaces are all grouped together in a namespace that is imported where its can be accessed.

For an example,

```js
import { LeagueV4 } from 'riot-api-typedef';

let entry: LeagueV4.LeagueEntryDto = /* Code here */
```
