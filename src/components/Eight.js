import React, { Component } from "react";
import './Eight.css'
export class Eight extends Component {
    constructor(){
        super();
        this.state ={fname:'', lname:'', email:'', }
        this.state ={fname1:'', lname1:'', email1:'', }
        this.state ={fname2:'', lname2:'', email2:'', }
    }
    render() {
        return(
            <div>
                <form action="">
                    <div className="group">
                        <div className="group1">
                            <div className="form-group">
                                <input type="text" placeholder="First Name" value={this.state.fname} onChange={(event)=>{this.setState({fname:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" value={this.state.lname} onChange={(event)=>{this.setState({lname:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="group2">
                            <div className="form-group">
                                <input type="text" placeholder="Name" value={this.state.fname1} onChange={(event)=>{this.setState({fname1:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" value={this.state.lname1} onChange={(event)=>{this.setState({lname1:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" value={this.state.email1} onChange={(event)=>{this.setState({email1:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="group3">
                            <div className="form-group">
                                <input type="text" placeholder="Name" value={this.state.fname2} onChange={(event)=>{this.setState({fname2:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" value={this.state.lname2} onChange={(event)=>{this.setState({lname2:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" value={this.state.email2} onChange={(event)=>{this.setState({email2:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="password"/>
                            </div>
                        </div>
                        <div className="group4">
                            <div className="form-group">
                                <input type="text" placeholder="Name" value={this.state.fname} onChange={(event)=>{this.setState({fname:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" value={this.state.lname} onChange={(event)=>{this.setState({lname:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" value={this.state.fname} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password"/>
                            </div>
                        </div>

                    </div>
                    <button className="form-btn">Submit</button>
                </form>
                <h1>{this.state.fname}</h1>
                <h1>{this.state.lname}</h1>
                <h1>{this.state.email}</h1>
            </div>
        );
    }
}

export default Eight