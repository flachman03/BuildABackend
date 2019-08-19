<h1>Football Api Documentation</h1>

<h3>This football api was developed as a school project to learn the basic of express and comes with 4 get endpoints and 2 post endpoints</h3>

<h5>GET `api/v1/teams`</h5>
<p>Doesn't require any additional options<p>
<p>Returns an array of football teams</p>

<h5>GET `api/v1/teams/:id`</h5>
<p>Requires adding the id of the football team to the url</p>
<p>Returns one football team object</p>

<h5>POST `api/v1/teams`</h5>
<p>Requires the post method,
  headers: {
    content-type: application/json
  }
  body: {
    team: 'team name',
    location: 'home city/state'
    established: 'when the team was established'
  }</P>
  <p>This will add the team object to the database and return the new objects id</p>

  <h5>GET `api/v1/quarterbacks`</h5>
  <p>Doesnt require any additional options</p>
  <p>returns an array of quarterback objects</p>

  <h5>GET `api/v1/quartterbacks/:id`</h5>
  <p>Requires adding the quarterback id to the url</p>
  <p>Returns one quarterback object</p>

  <h5>POST `api/v1/quarterbacks`</h5>
  <p>Requires the POST method,
    headers: {
      content-type: application/json
    },
    body: {
      name: 'player name',
      team: 'team name',
      number: 'year the player entered the nfl'
    }</p>
    <p>This will add the quarterback object to the database and return the object id</p>