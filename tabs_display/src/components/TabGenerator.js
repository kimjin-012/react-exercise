import React, { useState } from 'react';

const TabGenerator = props => {
    // const [tabitem, settabitem] = useState([]);
    const [tabnum, settabnum] = useState(0);

    const formsubmit = e => {
        e.preventDefault();
        props.contents( e, tabnum );
    }

    return (
        <div>
            <h1>How many tabs? (between 1 and 5)</h1>
            <form onSubmit={ formsubmit }>
                <input type="number" id="quantity" name="quantity" min="1" max="5" onChange={ e => settabnum(e.target.value) }/>
                <input type="submit" value="tabsubmits"/>
            </form>
        </div>
    )
}

export default TabGenerator;

    // const printform = e => {
    //     e.preventDefault();
    //     let x = [];
    //     for(var i = 0; i <tabnum; i++){
    //         x.push(<input type="text" name="name" onChange={ e = }></input>);
    //         x.push(<input type="text" name="content"></input>)
    //     }
    //     console.log(x);
    //     settabitem(x);
    // }
            // <form onSubmit={ formsubmit }>
            //     {tabitem.map((item, i) =>
            //         (item)
            //     )}
            //     <input type="submit" name="tabformsubmit"/>
            // </form>

    // const createtable = () => {
    //     let example = [];
    //     for(let i = 0; i < 3; i++){
    //         example.push(<p>{i}</p>)
    //     }
    //     console.log(example);
    //     return example;
    // }
    
// const [user, setuser] = setState({
//     name:'',
//     email:''
// });

// const formchange = e => {
//     const {name: key, value} = e.target;
//     setUser({
//         ...user,
//         [key]: {
//             value: value
//         }
//     })
// }

// //display..
// <Form output={formchange}/>
// {user.keyname.value}