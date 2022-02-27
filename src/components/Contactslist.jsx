import React from 'react'
import Contact from './Contact'



function Contactslist(props) {
    // console.log(props.list)
    // console.log(props.image)
    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contacts</h1>
                {props.list.map(item => <Contact name={item.name} number={item.phone}/>)}
                {/*{props.image.map(photo => <Contact image={photo.url}/>)}*/}
            </div>
        </div>
    )
}

export default Contactslist
