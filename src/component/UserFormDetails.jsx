import React, { useEffect, useRef, useState } from 'react'
import SubFormModal from './SubFormModal'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { companyList, dateFormat, degreeList } from '../utils'
import useUserFormModal from './hooks/useUserFormModal'

const UserFormDetails = ({ data, index, setEvent_key, forUpdate }) => {
    const ref= useRef()
    const {firstName, setFirstName, lastName, setLastName,
         email, setEmail, phoneNumber, setPhoneNumber, 
         address, setAddress, experienceModal, setExperienceModal,
         educationModal, setEducationModal, openExperienceModal, openEducationModal,
         userDispetch, dob, setDob, error, setError, userDelete,
         
         degree, setDegree, college, setCollege, startCollegeYear, setStartCollegeYear,
         endCollegeYear, setEndCollegeYear, companyName, setCompanyName,
         startCompanyYear, setStartCompanyYear, endCompanyYear, setEndCompanyYear} = useUserFormModal({data:data, setEvent_key:setEvent_key})
// console.log('data', data , firstName)

    return (
        <>
            <Row className="">
                <Col>
                    <Form.Group
                        className="position-relative"
                    >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                    </Form.Group></Col>
                <Col>
                    <Form.Group
                        md="4"
                        controlId="validationFormik102"
                        className="position-relative"
                    >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                    </Form.Group></Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group
                        className="position-relative"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="mail"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Form.Group></Col>
                <Col>
                    <Form.Group
                        controlId="validationFormik102"
                        className="position-relative"
                    >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phone number"
                            value={phoneNumber}
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                        />
                    </Form.Group></Col>
            </Row>
            <Row className="mb-3">
                <Col xs={6}>
                    <Form.Group
                        controlId="validationFormik102"
                        className="position-relative"
                    >
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control
                            ref={ref}
                            type="date"
                            name="date of birth"
                            value={dob}
                            onChange={(e)=>setDob(e.target.value)}
                        />
                    </Form.Group></Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group
                        controlId="validationFormik102"
                        className="position-relative"
                    >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="textarea"
                            name="address"
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                        />
                    </Form.Group></Col>
            </Row>
            <Row className="mb-3">
                <Row className='align-items-baseline' style={{fontFamily:'cursive'}}><Col xs={10}><Form.Label>Education</Form.Label></Col>
                    <Col className='d-flex justify-content-end' xs={2}>
                        <i className="bi bi-pencil-fill" style={{ cursor: 'pointer', padding: '' }} onClick={() => openEducationModal()}></i>
                    </Col></Row>
                <Col xs={10}>
                Collage Name - {college} <br/>
                Degree - {degree} <br/>
                year : {startCollegeYear} - {endCollegeYear}
                </Col>
                <Col xs={2}>
                </Col>
            </Row>
            <Row className="mb-3">
                <Row className='align-items-baseline' style={{fontFamily:'cursive'}}><Col xs={10}><Form.Label>Experience</Form.Label></Col>
                    <Col className='d-flex justify-content-end' xs={2} >
                        <i className="bi bi-pencil-fill" style={{ cursor: 'pointer', padding: '' }} onClick={() => openExperienceModal()}></i>
                    </Col></Row>
                <Col xs={10}>
                    {companyName} - {startCompanyYear}-{endCompanyYear}
                </Col>
                <Col xs={2}>
                </Col>
            </Row>
            <Modal.Footer>
            {error&&<span className='text-danger p-2'>Please fill all filds</span>}
                <Button type="button" onClick={()=>userDispetch({userType:forUpdate, index:index})}>{forUpdate?'Update':'Save'}</Button>
                {forUpdate&&<Button type="button" variant='danger' style={{marginLeft:'5px'}} onClick={()=>userDelete(index)}>Delete</Button>}
            </Modal.Footer>
            {educationModal && <SubFormModal show={educationModal}
                onHide={() => setEducationModal(false)}
                options={degreeList}
                seletedOption={degree}
                setSeletedOption={setDegree}
                college={college}
                setCollege={setCollege}
                startYear={startCollegeYear}
                setStartYear={setStartCollegeYear}
                endYear={endCollegeYear}
                setEndYear={setEndCollegeYear}
                educationDetails={data?.educationDetails}
                modal={'education'}
            />}

            {experienceModal && <SubFormModal show={experienceModal}
                onHide={() => setExperienceModal(false)}
                options={companyList}
                seletedOption={companyName}
                setSeletedOption={setCompanyName}
                startYear={startCompanyYear}
                setStartYear={setStartCompanyYear}
                endYear={endCompanyYear}
                setEndYear={setEndCompanyYear}
                experienceDetails={data?.experienceDetails}
                modal={'experience'}
            />}
        </>
    )
}

export default UserFormDetails