import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import FilterMovie from "../FilterMovie/FilterMovie"
function Navb({inputSearch, setInputSearch}) {
  
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="https://static.vecteezy.com/ti/vecteur-libre/p1/5538221-moderne-pop-corn-avec-paquet-logo-symbole-vecteur-icone-conception-graphique-illustration-vectoriel.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
              Movie App
          </Navbar.Brand>

          <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch}/>

        </Container>          
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}

export default Navb