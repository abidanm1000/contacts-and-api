import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';
import React, { useState, useEffect} from 'react'

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/

function App() {
  let contactList = [
    {contactName: 'Abi', contactNumber: "555-555-5555", contactImage:''},
    {contactName: 'Joe Dirt', contactNumber: "555-???-123?", contactImage:'https://m.media-amazon.com/images/M/MV5BMjEyMzEyNTY2MF5BMl5BanBnXkFtZTgwODcwNDk2NjE@._V1_.jpg'},
    {contactName: 'Master Shake', contactNumber: "000-000-0001", contactImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/905d008d-e774-4f04-8d1b-6aac3ef243c4/d9i6xcd-51dbca35-9f0e-49df-9a5e-2ef47081ece2.png/v1/fill/w_400,h_643,strp/master_shake_by_porygon2z_d9i6xcd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvOTA1ZDAwOGQtZTc3NC00ZjA0LThkMWItNmFhYzNlZjI0M2M0XC9kOWk2eGNkLTUxZGJjYTM1LTlmMGUtNDlkZi05YTVlLTJlZjQ3MDgxZWNlMi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zJRTm3ErUZtAkffXDWtkLOPvVEZ3ifY19pEDunq0Gi4'},
    {contactName: 'Garmanarnar', contactNumber: "gob-gob-gobb", contactImage:'https://i.ytimg.com/vi/dFDlLo0Ua8E/maxresdefault.jpg'}
  ]

  const [list, setList] = useState(contactList);
  // console.log(list[0].contactName)


  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setList(json))
  },[])


  return (
    <div className="App">
      <Sidebar />
      <Contactslist list={list}/>
    </div>
  );
}

export default App
