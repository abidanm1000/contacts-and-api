import React from 'react'
import Contact from './Contact'
import { useState, useEffect } from 'react'


function Contactslist({ list }) {
    // console.log(props.list)

    // let title = useRef('friends')
    // console.log(title.current.innerText)
    let defaultImage = 'https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png';

    const [image, setImage] = useState(defaultImage);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
        .then(response => response.json())
        .then(json => setImage(json))
      }, [])


    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contacts</h1>
                <h2 id='counter'><img id='contacts-image' src={defaultImage}/>{list.length}</h2>
                {list.map((item, index) => <Contact key={item.id} name={item.name} number={item.phone} image={image[index].url || defaultImage}/>)}
            </div>
        </div>
    )
}

export default Contactslist
