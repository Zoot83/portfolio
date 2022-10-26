import React from 'react';
import Card from 'react-bootstrap/Card';
import Athena from '../../img/Athena.jpg';
import Pygo from '../../img/pygo.jpg';
export default function About() {
  return (
    <Card bg="secondary" key="secondary" text="white" className="mb-2">
      <Card.Header>About Me</Card.Header>
      <Card.Body>
        <Card.Title> Fun Facts </Card.Title>
        <Card.Text>
          Hello! My name is Marshall and I currently live in State College, Pa.
          I am currently undergoing the UPenn Full stack web development
          bootcamp. I really enjoy learning more about how technology functions
          and how to make it myself. I am currently working in the State College
          Area School District as IT Support for the high school. There is
          typically over 500 students in each graduating class, so I am quite
          busy throughout the day.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title> Dog Facts </Card.Title>
        <Card.Text>
          While I'm not at work or working on my bootcamp material, I enjoy
          going hunting with my 2 dogs Pygo and Athena. I also really enjoy
          playing video games with my friends or playing board games with them.
          My brother, nephew and I have recently started playing Gloomhaven and
          it's an aboslute blast to play!
        </Card.Text>
      </Card.Body>
      <Card.Img src={Athena} />
      <Card.Img src={Pygo} />
    </Card>
  );
}
