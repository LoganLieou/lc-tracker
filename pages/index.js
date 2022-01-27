import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Container, NavDropdown, Nav, Button, Form, FormControl, Card } from 'react-bootstrap'
import cryge from '../public/cryge.gif'
import Image from 'next/image'

export function NB() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Leetcode Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link 
              href="https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU">
              Blind 75
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/categories/array">Array</NavDropdown.Item>
              <NavDropdown.Item href="/categories/string">String</NavDropdown.Item>
              <NavDropdown.Item href="/categories/binary">Binary</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/graph">Graph</NavDropdown.Item>
              <NavDropdown.Item href="/categories/tree">Tree</NavDropdown.Item>
              <NavDropdown.Item href="/categories/linkedlist">Linked List</NavDropdown.Item>
              <NavDropdown.Item href="/categories/dp">Dynamic Programming</NavDropdown.Item>
              <NavDropdown.Item href="/categories/interval">Interval</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leetcode Tracker</title>
        <meta name="description" content="Application to help you track leetcode" />
        <link rel="icon" href="/pepecoffee.png" />
      </Head>

      <NB/>
      <main className="container mt-3">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image src={cryge} className="d-block mx-lg-auto img-fluid" width={700} height={600} />
        </div>
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">This is Leetcode Tracker</h1>
            <p className="lead">
              {`Leetcode an interview preperation website, there's
              thousands of questions on this site spanning many categories for hundreds of
              companies, each year 1000s of cs majors "grind leetcode" just to get bodied
              in technical interviews anyway. My goal is to focus on the most important lc
              questions in order to best prepare for interviews.`}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link href="/login"><a type="button" className="btn btn-primary btn-lg px-4 me-md-2">Login</a></Link>
              <Link href="/about"><a type="button" className="btn btn-outline-secondary btn-lg px-4">About</a></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
