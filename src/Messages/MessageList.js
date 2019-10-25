import React, {useState, useEffect} from "react";
import MessageCard from "../Messages/MessageCard"
//import { useStateValue } from "./state";


const MessageList = (props) => {
    //const [{ user }, dispatch] = useStateValue(); //not sure if we'll need a useEffect here to update when a message gets deleted, cant test that right now with our current backend

//     return(
//         <div>
//             <h2>{user.firstName}'s Messages</h2>
//             { user.messages.map(msg => {
//                 return <MessageCard msg={msg} /> //using props for messageCard to keep things organized
//             }) }
//         </div>
// )

const [messages, setMessages] = useState(props.messages);
const [searchPhrase, setSearchPhrase] = useState('');
const [searchResults, setSearchResults] = useState([]);

useEffect(() => {
  const filterMessages = messages.filter(message =>
    {
      return Object.values(message).map(value => {
        return value;
      }).find(value => {
        return value.includes(searchPhrase);
      });
    });

    setSearchResults(filterMessages);
  }, [searchPhrase]);

  const handleChange = event => {
      setSearchPhrase(event.target.value);
  }

return (
    <div>
         <form>
            <label for='name'>Search:</label>
            <input
             id='name'
             type='text'
             name='textfield'
             placeholder="Search"
             value={searchPhrase}
             onChange={handleChange}
             />
         </form>
         
    {searchResults.map(message => (
        <MessageCard message={message}/>
      ))}      
    </div>
);
}
export default MessageList;