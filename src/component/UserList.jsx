import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import UserFormDetails from './UserFormDetails'


const UserList = () => {
  const userList = useSelector(state => state.users)
  // console.log("data getting from userList  ",  userList)
  return (
    <Accordion defaultActiveKey="0">
      {userList && userList.length > 0 ? userList.map((item, index) => {
        return (<Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>{item.firstName} {item.lastName}</Accordion.Header>
          <Accordion.Body>
            <UserFormDetails data={item} index={index} forUpdate={true} />
          </Accordion.Body>
        </Accordion.Item>)
      }) : 'data not found'}
    </Accordion>

  )
}

export default UserList