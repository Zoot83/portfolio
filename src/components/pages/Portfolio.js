import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Demo from '../../img/Demo.gif';
import Friend from '../../img/Friend.jpg';
import Social from '../../img/Social.jpg';

export default function Portfolio() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={Friend} />
          <Card.Body>
            <Card.Title>Find a Friend</Card.Title>
            <Card.Text>
              The purpose of this is to create a full stack web app that allows
              users find other people to do activities with. It will allow users
              to create an account and post or find others who are looking for
              something to do
            </Card.Text>
            Check out where they are:
            <br></br>
            <a href="https://fathomless-gorge-22203.herokuapp.com/">
              Deployed Site
            </a>
            <br></br>
            <a href="https://github.com/mmelan000/Find-A-Friend">GitHub Repo</a>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={Social} />
          <Card.Body>
            <Card.Title>Social Network</Card.Title>
            <Card.Text>
              In this project I create a app that would allow you to interact
              with thoughts that are posting by a users. You are able to create
              reaction for that specific thought and store them. They are using
              Mongo db in order to store and manage the information. You are
              also able to insert friends into the users account by referencing
              the friends user id.
            </Card.Text>
            Check out where they are:
            <br></br>
            <a href="https://drive.google.com/file/d/1uTmFZEG1REsAfSelWuOmjP170l-DWBJ1/view">
              Demo
            </a>
            <br></br>
            <a href="https://github.com/Zoot83/Social-Network">GitHub Repo</a>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={Demo} />
          <Card.Body>
            <Card.Title>Employee Tracker</Card.Title>
            <Card.Text>
              In this project I created a application that would allow you to
              keep track of your employee for a company. By using inquirer I was
              able to gather information for the database and store it in the
              proper tables. I ustilized multiple types of prompts from inquirer
              to get the right information along with the right choices for
              certain situations. I created 8 paths for the application that the
              user could user that would show manipulate or add information from
              the database. I also created a database using MySQL and was able
              to store the inforamtion there. To show that this information was
              behaving right, I seeded the database with infromation so that I
              could use that in the development process.
            </Card.Text>
            Check out where they are:
            <br></br>
            <a href="https://zoot83.github.io/Employee_Tracker/">Demo</a>
            <br></br>
            <a href="https://github.com/Zoot83/Employee_Tracker">GitHub Repo</a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
