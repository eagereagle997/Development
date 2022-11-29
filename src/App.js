import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import movieData from "./assets/movies.json";
import {MovieItem} from "./components/MovieItem";





function App() {

  const setTrilogyFilter = eventKey => {
    setTrilogy(eventKey);
  };
  
  const matchesTrilogyFilterType = item => {
    // all items should be shown when no filter is selected
    if(trilogyFilterType === "All") { 
      return true
    } else if (trilogyFilterType === item.trilogy) {
      return true
    } else {
      return false
    }
  }

  const setMediaFilter = eventKey => {
    setMedia(eventKey);
  };
  
  const matchesFilmMediaFilterType = item => {
    // all items should be shown when no filter is selected
    if(filmMediaFilterType === "All") { 
      return true
    } else if (filmMediaFilterType === item.filmtype) {
      return true
    } else {
      return false
    }
  }

  const setPGFilter = eventKey => {
    setPG(eventKey);
  };
  
  const matchesPGFilterType = item => {
    // all items should be shown when no filter is selected
    if(PGFilterType === "All") { 
      return true
    } else if (PGFilterType === item.parentalrating) {
      return true
    } else {
      return false
    }
  }

  const updateSortBy = eventKey => {
    setSortBy(eventKey);
  };

  const clearMovieList = () => {
    addToMovieList([]);
    setTotal(0);
  };

  const [trilogyFilterType, setTrilogy] = useState("All");
  const [filmMediaFilterType, setMedia] = useState("All");
  const [PGFilterType, setPG] = useState("All");
  const [sortBy, setSortBy] = useState("releasedate");

  const [movieList, addToMovieList] = useState([]);
  const [totalMinutes, setTotal] = useState(0);

  const filteredData = movieData.filter(matchesTrilogyFilterType).filter(matchesFilmMediaFilterType).filter(matchesPGFilterType).sort((a, b) => {
      if (sortBy === "releasedate") {
        return a.releasedate - b.releasedate;
      }
      else if (sortBy === "imdbrating") {
        return b.imdbrating - a.imdbrating;
      }
      else if (sortBy === "movielength") {
        return b.movielength - a.movielength;
      }
      else {
        return a.releasedate - b.releasedate;
      }
      
    })
    ;




  return (
    <div className="App">
      <div className = "topBar">
      <br></br>
      <h1>Star Wars Movie Tracker</h1> {/* TODO: personalize your bakery (if you want) */}
      <br></br>

          {/* <Nav onSelect={selectFilterType}>
            <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="original">Original Trilogy</Nav.Link></Nav.Item>
          </Nav> */}

     
    
            <Container>
              <Row>
                <Col>

                <Dropdown onSelect={setTrilogyFilter}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Filter by Trilogy
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="All">All</Dropdown.Item>
                      <Dropdown.Item eventKey="prequel">The Prequels</Dropdown.Item>
                      <Dropdown.Item eventKey="original">The Originals</Dropdown.Item>
                      <Dropdown.Item eventKey="sequel">The Sequels</Dropdown.Item>
                      <Dropdown.Item eventKey="other">Other</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
                <Col>

                <Dropdown onSelect={setMediaFilter}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Filter by Film Media Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="All">All</Dropdown.Item>
                      <Dropdown.Item eventKey="live-action">Live Action</Dropdown.Item>
                      <Dropdown.Item eventKey="animated">Animated</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
                <Col>
            
                  <Dropdown onSelect={setPGFilter}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter by Parental Guidance Rating
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="PG">PG</Dropdown.Item>
                        <Dropdown.Item eventKey="PG13">PG-13</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </Col>
                
              
      
              <Col>
              <Dropdown onSelect={updateSortBy}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort By:
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="releasedate">Year of Release</Dropdown.Item>
                    <Dropdown.Item eventKey="imdbrating">IMDB Rating</Dropdown.Item>
                    <Dropdown.Item eventKey="movielength">Movie Length</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              </Col>
          
                </Row>
             </Container>
        </div>
          <br></br>
          <br></br>
          <div className = "movieItemContainer">

          {filteredData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
            <MovieItem key={index} item = {item} movieList = {movieList} handleMovieList = {addToMovieList} totalMinutes = {totalMinutes} setTotal = {setTotal}/>
          ))}
        </div>

        <div className = "totalMovieContainer">
          <h2>Star Wars Movies Watched</h2>

          {/* TODO: render a list of items in the cart */
            movieList.map((item, index) => (
              <p key = {index}>{item.title}</p>
            ))
          }
          
          <b><p>You have watched a total of {totalMinutes} minutes of Star Wars films!</p></b>

          <button className = "removeButton" onClick={clearMovieList}>Clear List</button>

        </div>

    </div>
  );
}

export default App;
