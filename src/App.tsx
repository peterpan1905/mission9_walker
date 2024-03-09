import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';

const teamsData = require('./CollegeBasketballTeams.json');

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  return (
    <div>
      <h1>NCAA Basketball Tournament Teams</h1>
      <h2>Welcome to my NCAA Basketball Tournament Teams website!</h2>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const team = this.props;

    return (
      <div className="teamCard">
        <h3>School: {team.school}</h3>
        <h3>Mascot: {team.name}</h3>
        <h3>
          Location: {team.city}, {team.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="teamList">
      {teamsData['teams'].map((team: TeamProps, index: number) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
