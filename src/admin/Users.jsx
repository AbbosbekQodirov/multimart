import { async } from '@firebase/util';
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';

function Users() {


    const {data: usersData, loading} = useGetData('users')

    const deleteUser = async(id)=>{
        await deleteDoc(doc(db, 'users', id))
        toast.success("User deleted!")
    }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-bold">Loading.....</h5>
                ) : (
                  usersData?.map((user) => (
                    <tr key={user.uid}>
                      <td>
                        <img src={user.photoURL} alt="" />
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button onClick={()=>{
                            deleteUser(user.uid)
                        }} className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Users