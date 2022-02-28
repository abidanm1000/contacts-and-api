import React from 'react'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component

function Contact(props) {

    // let images = props.image.map(obj => obj.url)
    // console.log(images)
    
    // const defaultImage = () => {
    //     if(images == '') {
    //         return 'https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png'
    //     } else {
    //         return images
    //     }
    // }


    return (
        <div className='contactContainer'>
            <div className="imageContainer">
            <img src={props.image} alt=""></img>
            </div>

            <div className="contactInfo">
                <h2>{props.name}</h2>
                <h2>{props.number}</h2>
            </div>
        </div>
    )
}

export default Contact
