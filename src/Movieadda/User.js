import React, { Component } from "react";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleShowModal = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="p-3">
        <div className="d-flex justify-content-between my-3">
          <h1>USER LIST</h1>
          <button className="btn btn-primary" onClick={this.handleShowModal}>
            Add New User
          </button>
        </div>
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
        <table className="table w-100 table-bordered table-striped">
          <thead className="table-back">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile no</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody className="table-b">
            <tr>
              <td>Suraj</td>
              <td>suraj@gmail.com</td>
              <td>89989898998</td>
              <td>Patna</td>
            </tr>
            <tr>
              <td>subodh</td>
              <td>subodh@gmail.com</td>
              <td>7989898998</td>
              <td>Delhi</td>
            </tr>
            <tr>
              <td>MAHESH</td>
              <td>Mahesh@gmail.com</td>
              <td>9989898998</td>
              <td>surat</td>
            </tr>
            <tr>
              <td>Ranjay</td>
              <td>ranjay@gmail.com</td>
              <td>77989898998</td>
              <td>Ranchi</td>
            </tr>
            <tr>
              <td>Santosh</td>
              <td>test@gmail.com</td>
              <td>89989898998</td>
              <td>Bnagalore</td>
            </tr>
            <tr>
              <td>name</td>
              <td>test@gmail.com</td>
              <td>89989898998</td>
              <td>Bnagalore</td>
            </tr>
            <tr>
              <td>name</td>
              <td>test@gmail.com</td>
              <td>89989898998</td>
              <td>Bnagalore</td>
            </tr>
            <tr>
              <td>name</td>
              <td>test@gmail.com</td>
              <td>89989898998</td>
              <td>Bnagalore</td>
            </tr>
            <tr>
              <td>name</td>
              <td>test@gmail.com</td>
              <td>89989898998</td>
              <td>Bnagalore</td>
            </tr>
            <tr>
              <td>name</td>
              <td>test@gmail.com</td>
              <td>89989898998</td>
              <td>Bnagalore</td>
            </tr>
          </tbody>
        </table>

        {this.state.show ? (
          <div
            class="modal  d-block"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add New User
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={this.handleClose}
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={this.handleClose}
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default User;
