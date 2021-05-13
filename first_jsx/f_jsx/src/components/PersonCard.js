import React, { useState } from 'react';

// class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         const {firstname, lastname, age, color} = this.props;
//         // this.firstname = firstname;
//         // this.lastname = lastname;
//         // this.age = age;
//         // this.color = color;
//         this.state = {
//             age: age,
//             firstname: firstname,
//             lastname: lastname,
//             color: color,
//         }
//     }

    // aging = () => {
    //     // var adding = this.state.age + 1;
    //     this.setState({age : this.state.age + 1});
    // }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.firstname}, {this.state.lastname}</h1>
//                 <p>Age:{this.state.age}</p>
//                 <p>Hair Color:{this.state.color}</p>
//                 <button onClick={ this.aging }>Birthday Button for {this.state.firstname} {this.state.lastname}</button>
//             </div>
//         );
//     }
// }

//const [switchPosition, setSwitchPosition] = useState('On');
//const [name, setName] = useState('');

//const flipSwitch = () => {
//  if(switchPosition === 'On'){
//     setSwitchPosition('off');
// }else{
//     setSwitchPosition('on');
// }
//}
// return(
//     <div>
//         <h1>{ name }</h1>
//         <button onClick={ flipSwitch }>Click</button>
//         <p>{switchPosition}</p>
//         <input type="text" name="name" onChange={ e => setName(e.target.value)}/>
//     </div>
// )

const PersonCard = props =>{
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [passvali, setpassvali] = useState(false);

    // const passwordvalidate = e => {
    //     e.preventDefault();
    //     setcpassword(e.target.value);
    //     if(cpassword != password){
    //         setpassvali(true);
    //     }else if(cpassword == password){
    //         setpassvali(false);
    //     }
    // }

    return (
        <form>
        <div>
            <h2>firstname</h2>
            <input type="text" name="name" onChange={ e => setfname(e.target.value)}/>
            {
                fname.length < 2 && fname.length > 0 ?
                <p>First Name must be at least 2 characters</p>:
                ''
            }
            <h2>lastname</h2>
            <input type="text" name="name" onChange={ e => setlname(e.target.value)}/>
            {
                lname.length < 2 && lname.length > 0 ?
                <p>Last Name must be at least 2 characters</p>:
                ''
            }
            <h2>email</h2>
            <input type="text" name="name" onChange={ e => setemail(e.target.value)}/>
            {
                email.length < 5 && email.length > 0 ?
                <p>Email must be at least 5 characters</p>:
                ''
            }
            <h2>password</h2>
            <input type="text" name="name" onChange={ e => setpassword(e.target.value)}/>
            <h2>confirm password</h2>
            <input type="text" name="name" onChange={ e => setcpassword(e.target.value) }/>
            {
                password !== cpassword && cpassword > 0 ?
                <p>password don't match</p>:
                ''
            }
            <br/>
            <h2>Your form data</h2>
            <p>First Name:{fname}</p>
            <p>Last Name:{lname}</p>
            <p>Email :{email}</p>
            <p>Password:{password}</p>
            <p>Confirm password:{cpassword}</p>
            <input type="submit" value="create"/>
        </div>
        </form>
    );
}

export default PersonCard;

