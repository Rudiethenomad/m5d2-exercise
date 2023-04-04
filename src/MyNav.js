import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import BookList from './BookList';

function myNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Books href="#home">Navbar</Navbar.Books>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Browse">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
     
    </>
  );
}

export default myNavBar;
//export default App;