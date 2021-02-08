import React , {Component} from "react";
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import NewUser from '../components/newuser'

class Users extends Component {

  state={
    users: []
  }

  async componentDidMount(){
    const {data} = await axios.get('https://reqres.in/api/users?page=2');
    this.setState({
      users: data.data
    })
  }

  render() {
    const {users} = this.state;
    return (
      <>
        <Link to='/users/new'>
          <button className='btn btn-success m-2'>
            Add User
          </button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className='btn btn-info'
                    onClick={() => this.handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    className='btn btn-danger m-2'
                    onClick={() => this.handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Route path='users/new' exact>
          <NewUser/>
        </Route>
      </>
      );
  }
  
};

export default Users;
