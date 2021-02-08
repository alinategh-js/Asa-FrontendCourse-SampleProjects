import React , {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from '../common/pagination'

class Users extends Component {

  state={
    users: [],
    pages: 0,
    page: 1,
  }

  async componentDidMount(){
    const {data} = await axios.get(`https://reqres.in/api/users?page=${this.state.page}`);
    this.setState({
      users: data.data,
      pages: data.total_pages,
      page: 1
    })
  }

  pageSelected = async (page) => {
    const {data} = await axios.get(`https://reqres.in/api/users?page=${page}`);
    this.setState({
      users: data.data,
      page: page
    })
  }

  render() {
    const {users, pages, page} = this.state;
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

        <Pagination 
            pages={pages}
            currentPage={page}
            onPageSelect={(page) => this.pageSelected(page)}
        /> 
        
      </>
      );
  }
  
};

export default Users;
