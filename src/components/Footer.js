import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-black"
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <MDBContainer className="pt-4">
        Follow me below!
        <section className="mb-4">
          <a
            className="text-dark m-1"
            href="https://www.instagram.com/_marshmellowzz_/"
          >
            <AiFillInstagram />
          </a>

          <a
            className="text-dark m-1"
            href="https://www.linkedin.com/in/john-m-rizzuto/"
          >
            <AiFillLinkedin />
          </a>
          <a className="text-dark m-1" href="https://github.com/Zoot83">
            <AiOutlineGithub />
          </a>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
