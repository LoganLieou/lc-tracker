import { NB } from './index.js'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [res, setRes] = useState('')

  const onChangeP = (e) => {
    setPass(e.target.value)
  }

  const onChangeU = (e) => {
    setUser(e.target.value)
  }

  const onSubmit = () => {
    fetch("localhost:3000/api/login", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: {'username': user, 'password': pass}
    }).then(r => setRes(r))
      .catch(e => console.error(e))
  }

  return (
    <div>
      <NB/>
      <div className="container mt-5" style={{width: 400}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={onChangeU} />
            <Form.Text className="text-muted">
              We always share your email with anyone else who asks.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={onChangeP}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
        {res}
      </div>
    </div>
  )
}
