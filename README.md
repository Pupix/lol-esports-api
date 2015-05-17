# lol-esports-api
An API for the eSports side of League of Legends. It uses the [eSports API](http://na.lolesports.com/api/swagger) offered by [lolesports](http://na.lolesports.com).

## Download
lol-esports-api is installable via:

- [GitHub](https://github.com/Pupix/lol-esports-api) `git clone https://github.com/Pupix/lol-esports-api.git`
- [npm](https://www.npmjs.com/): `npm install lol-esports-api`


## Getting started
To start the API server run the following command:
```js
npm start
```
You will have to do a **one time** configuration to be able to use the API. At the prompt you will be asked for the `port` on which the API will run.

### Resetting the configuration
You can change the provided API configuration at any time, simply by running:
```js
npm run reset
```

## Documentation

### Routes

* [`/news`](#/news)
* [`/leagues`](#/leagues)
* [`/leagues/:leagueId`](#/leagues/:leagueId)
* [`/tournaments`](#/tournaments)
* [`/tournaments/:tournamentId`](#/tournaments/:tournamentId)
* [`/tournaments/:tournamentId/standings`](#/tournaments/:tournamentId/standings)
* [`/tournaments/:tournamentId/schedule`](#/tournaments/:tournamentId/schedule)
* [`/tournaments/:tournamentId/leaders/:stat`](#/tournaments/:tournamentId/leaders/:stat)
* [`/tournaments/:tournamentId/stats/fantasy`](#/tournaments/:tournamentId/stats/fantasy)
* [`/tournaments/:tournamentId/stats/players`](#/tournaments/:tournamentId/stats/players)
* [`/tournaments/:tournamentId/stats/players/:playerId`](#/tournaments/:tournamentId/stats/players/:playerId)
* [`/tournaments/:tournamentId/stats/players/:playerId/champs`](#/tournaments/:tournamentId/stats/players/:playerId/champs)
* [`/series`](#/series)
* [`/series/:seriesId`](#/series/:seriesId)
* [`/matches/:matchId`](#/matches/:matchId)
* [`/games/:gameId`](#/games/:gameId)
* [`/teams/:teamId`](#/teams/:teamId)
* [`/teams/:teamId/stats`](#/teams/:teamId/stats)
* [`/players/:playerId`](#/players/:playerId)
* [`/players/:playerId/stats`](#/players/:playerId/stats)
* [`/programming`](#/programming)
* [`/programming/:blockId`](#/programming/:blockId)
* [`/programming/week/:date`](#/programming/week/:date)

---------------------------------------

<a name="/news" />
### /news

Returns the latest news.

**Querystring parameters**

* `limit` - The maximum amount of news to return, if omitted, limit will default to 10, max of 50.
* `offset` - The numbers of articles to skip.
* `category` - The taxonomy identifier to filter results with. Omit to return all taxonomies.
* `language` - The language to limit the news articles to.

---------------------------------------

<a name="/leagues" />
### /leagues

Returns basic information on all existing leagues.

---------------------------------------

<a name="/leagues/:leagueId" />
### /leagues/:leagueId

Returns basic information about a league.

---------------------------------------

<a name="/tournaments" />
### /tournaments

Returns basic information about all tournaments including contestants, and beginning and end dates.

---------------------------------------

<a name="/tournaments/:tournamentId" />
### /tournaments/:tournamentId

Returns basic information about a tournament including contestants, and beginning and end dates

---------------------------------------

<a name="/tournaments/:tournamentId/standings" />
### /tournaments/:tournamentId/standings

Returns the standings for the specified tournament.

---------------------------------------

<a name="/tournaments/:tournamentId/schedule" />
### /tournaments/:tournamentId/schedule

Returns the schedule of matches for the specified tournament.

**Querystring parameters**

* `teamId` - ID of a team you want to view the schedule for.
* `finished` - Whether or not to include finished games.
* `future` - Whether or not to include future games.
* `live` - Whether or not to include live games.

---------------------------------------

<a name="/tournaments/:tournamentId/leaders/:stat" />
### /tournaments/:tournamentId/leaders/:stat

Returns the greatest stat for the specified tournament.

---------------------------------------

<a name="/tournaments/:tournamentId/stats/fantasy" />
### /tournaments/:tournamentId/stats/fantasy

Returns fantasy stats for the specified tournament.

**Querystring parameters**

* `dateBegin` - Filter the start dates to a particular date.
* `dateEnd` - Filter the end dates to a particular date.

---------------------------------------

<a name="/tournaments/:tournamentId/stats/players" />
### /tournaments/:tournamentId/stats/players

Returns kda, average gold and gpm for all players.

---------------------------------------

<a name="/tournaments/:tournamentId/stats/players/:playerId" />
### /tournaments/:tournamentId/stats/players/:playerId

Returns kda, average gold and gpm for a player.

---------------------------------------

<a name="/tournaments/:tournamentId/stats/players/:playerId/champs" />
### /tournaments/:tournamentId/stats/players/:playerId/champs

Returns kda, average gold and gpm for a player on different champions.

---------------------------------------

<a name="/series" />
### /series

Returns basic information on all existing series.

---------------------------------------

<a name="/series/:seriesId" />
### /series/:seriesId

Returns basic information about a series.

---------------------------------------

<a name="/matches/:matchId" />
### /matches/:matchId

Returns basic information about a match including name, tournament information, and live streams.

---------------------------------------

<a name="/games/:gameId" />
### /games/:gameId

Returns basic information about a game including players, tournament information, and videos on demand.

---------------------------------------

<a name="/teams/:teamId" />
### /teams/:teamId

Returns basic information about a team including players, name, and profile url.

**Querystring parameters**

* `expandPlayers` - Instead of each player element returning limited data, fully expand each player element to contain the results of a player api call for that player.

---------------------------------------

<a name="/teams/:teamId/stats" />
### /teams/:teamId/stats

Returns a team's stats for the entire tournament or tournament series.

**Querystring parameters**

* `tournamentId` - ID of the tournament you want to filter by.

---------------------------------------

<a name="/players/:playerId" />
### /players/:playerId

Returns basic information about a player including name, bio, and profile url.

---------------------------------------

<a name="/players/:playerId/stats" />
### /players/:playerId/stats

Returns a player's stats for the entire tournament or tournament series.

**Querystring parameters**

* `tournamentId` - ID of the tournament you want to filter by.

---------------------------------------

<a name="/programming" />
### /programming

Returns all programming blocks.

**Querystring parameters**

* `expandMatches` - Instead of each matches element returning a simple array of integers, fully expand each matches element to contain the results of a match api call for each match found.
* `limit` - The limit of the blocks to return. Only applicable to **next** and **prev** methods
* `method` - The method to execute.
  * *Possible values:* **all | time | next | prev**.
* ~~`time` - The time to start for programming blocks.~~
* `tournamentId` - ID of the tournament you want to filter by.
* `winner` - Whether or not to show the winner.

---------------------------------------

<a name="/programming/:blockId" />
### /programming/:blockId

Returns a programming block.

**Querystring parameters**

* `expandMatches` - Instead of each matches element returning a simple array of integers, fully expand each matches element to contain the results of a match api call for each match found.

---------------------------------------

<a name="/programming/week/:date" />
### /programming/week/:date

Returns a week's programming blocks.

`:date` must follow the **YYYY-MM-DD** format.

**Querystring parameters**

* `offset` - Date offset **[-]NNNN**
