import { useState, useEffect } from 'react'
import { Accordion, Form } from 'react-bootstrap'
import { NB } from './index.js'

export default function Blind() {
  return (
    <div>
      <NB/>
        <Accordion className="container mt-5 my-5">

            <Accordion.Item eventKey="0">
                <Accordion.Header>Arrays and Hashing</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Form.Check type="checkbox" id="default-checkbox" label="Two Sum"/>
                        <Form.Check type="checkbox" id="default-checkbox" label="Contains Duplicate"/>
                        <Form.Check type="checkbox" id="default-checkbox" label="Valid Anagram"/>
                        <Form.Check type="checkbox" id="default-checkbox" label="Group Anagrams"/>
                        <Form.Check type="checkbox" id="default-checkbox" label="Top K Frequent Elements"/>
                        <Form.Check type="checkbox" id="default-checkbox" label="Product of Array Except Self"/>
                        <Form.Check type="checkbox" id="default-checkbox" label="Encode and Decode Strings"/>
                        <Form.Check type="checkbox" id="default-checkbox" label="Longest Consecutive Sequence"/>
                      </Form>
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>1D Dynamic Programming</Accordion.Header>
                    <Accordion.Body>
                        Filler asf...
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Two Pointer</Accordion.Header>
                    <Accordion.Body>
                        Filler asf...
                    </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    </div>
  )
}
