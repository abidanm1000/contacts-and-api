import React from 'react'
import Contact from './Contact'
import { useState, useEffect} from 'react'


function Contactslist(props) {
    // console.log(props.list)

    // let title = useRef('friends')
    // console.log(title.current.innerText)

    const [image, setImage] = useState('https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png');
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
        .then(response => response.json())
        .then(json => setImage(json))
      }, [])


    // console.log(image[0].url)

    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contacts</h1>
                {/*{props.list.map(item => <Contact name={item.name} number={item.phone}/>)}*/}
                {props.list.map((item, index) => <Contact key={item.id} name={item.name} number={item.phone} image={image[index].url || 'https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png'}/>)}
            </div>
        </div>
    )
}

export default Contactslist
