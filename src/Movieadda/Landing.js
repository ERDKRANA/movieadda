import React, {Component} from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import User from "./User";
import Group from "./Group";
import Movie from "./Movie";
import Text from "./Text";
import Upcoming from "./Upcoming";


class Landing extends Component{
    constructor(props){
        super(props);
        this.state={
            active_nav:"",
        };

        
    };
    handleChangeSideNav = (name)=>{
        console.log(name);
        this.setState({active_nav:name});
    }
    render(){
        console.log(this.state.active_nav);
        return(
            <div>
                <Header {...this.props}/>
               <div className = "d-flex">
                <div className="">
                    <SideNav active_nav ={this.state.active_nav}
                    handleChangeSideNav={this.handleChangeSideNav}
                    />   
                </div>
               
                <div className="w-100">
                    {this.state.active_nav === "User" && <User/>}
                    {this.state.active_nav === "Group" && <Group/>}
                    {this.state.active_nav === "Movie" && <Movie/>}
                    {this.state.active_nav === "Text" && <Text/>}
                    {this.state.active_nav === "Upcoming" && <Upcoming/>}
                </div>
               </div> 
               <div className="container-fluid bg-danger">
               <div className="row">
          <div className="col-sm-12 text-center text-white">
            @All Right Recive Moviadda </div>
            </div>
               </div>
            </div>
        )
    }
}
export default Landing;