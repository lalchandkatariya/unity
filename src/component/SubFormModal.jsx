import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'


const SubFormModal = ({ show, onHide, options, modal, college, setCollege, seletedOption, setSeletedOption, startYear, setStartYear, endYear, setEndYear }) => {


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {modal === 'experience' ? 'Experience' : 'Education'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="">
          <Col>
            <Form.Group
              className="position-relative"
            >
              <Form.Label>{modal === 'education' ? 'Degree' : 'Company Name'}</Form.Label>
              <Form.Select
                type="select"
                name="Degree"
                value={seletedOption}
                onChange={(e)=>setSeletedOption(e.target.value)}
              >{options.map((item, index) => <option key={index}>{item}</option>)}
              </Form.Select>
            </Form.Group></Col>
          {modal === 'education' ? <Col>
            <Form.Group
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                name="College"
                value={college}
                onChange={(e)=>setCollege(e.target.value)}
              />
            </Form.Group></Col> : null}
        </Row>
        <Row className="">
          <Col>
            <Form.Group
              className="position-relative"
            >
              <Form.Label>Start Year</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={startYear}
                onChange={(e)=>setStartYear(e.target.value)}
              />
            </Form.Group></Col>
          <Col>
            <Form.Group
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>End Year</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={endYear}
                onChange={(e)=> setEndYear(e.target.value)}
              />
            </Form.Group></Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SubFormModal