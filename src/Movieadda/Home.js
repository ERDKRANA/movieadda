import React, { Component } from "react";
import Carousal from "./Carousal";
import Header from "./Header";
class Home extends Component {
  render() {
    return (
      <div>
        <Header  {...this.props}/>
        <div className="container mt-2">
          <Carousal />
          <div className="p-3 m-3 text-center">
            <h1 className="w-70 mx-auto text-info">
              Friends aesthetic group photo beach 2020 friend group
            </h1>
          </div>
        </div>

        {/* 3rd start */}
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-8 right-sec">
              <h3 className="text-success">
                Enjoy Your Life Enjoy Your Life Enjoy Your Life Enjoy Your Life
              </h3>
              <h6> The Rock is great do you know why?</h6>
              <ul>
                <li className="text-warning">He is handsome</li>
                <li>He is handsome</li>
                <li>He is handsome</li>
                <li>He is handsome</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <img
                src="https://i.pinimg.com/originals/f2/76/96/f2769659cc4756c0c982e4692511b931.jpg"
                className="group-pic"
              />
            </div>
          </div>
        </div>

        {/* 3rd end */}
        {/* 4th start */}

        <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3">
            <img
              src="data:image/jpeg;base64,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"
              className="box-pic"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtBiSgptZlgNjXigCblNs-xnyki7w48qH4w&usqp=CAU"
              className="box-pic"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3jaT38ozE4ymbNzrMRttxoMJVktGrpESPA&usqp=CAU"
              className="box-pic"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4nt87Gquop7DueRgNhXlZdWLbxEpSF7XyA&usqp=CAU"
              className="box-pic"
            />
          </div>
          </div>
        </div>
        {/* 4th end */}
        {/* 5th start */}
        <div className="container-fluid bg-info text-white  mt-3">
        <div className="row">
          <div className="col-sm-4">
                  Movieadda
                <li>House no-245,Rajendra Nagar Road No-7,Patna-16</li>
                
                
             
        </div> 
        <div className="col-sm-4">
             Useful link
            <li>Home</li>
            <li>Career</li>
            <li>About us</li>
            <li>Contract us</li>
            <ul/>
        </div> 
        <div className="col-sm-4 text-align-rightr">
            @All Right Recive Moviadda
        </div> 
        
       </div>
       </div>
      </div>
    );
  }
}
export default Home;