import React,{Component} from "react";

// const users = [
//     {userName: "karin",email:"k@gmail.com" ,password:"123456" },
//     {userName: "Michael",email:"M@gmail.com" ,password:"654321" }

// ]

export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    click = () => {
        const url = "https://jsonplaceholder.typicode.com/users"

        fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            this.setState({users: result})
        })
        .catch(err => console.error(err));

    }
    render(){
        return(
            <div>
                <button onClick={this.click}> click me!</button>
                <ul>
                    {this.state.users.map(x => <li>{x.name}</li>)}
                </ul>
            </div>
        )
    }
}
