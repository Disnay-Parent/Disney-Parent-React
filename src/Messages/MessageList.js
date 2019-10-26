import React, {useState, useEffect} from "react";
import MessageCard from "../Messages/MessageCard";
//import { useStateValue } from "./state";
import styled from "styled-components";
import {axiosWithAuth} from "../utils/axiosWithAuth"

const MainContainer = styled.div`
  margin-top: 20px;
`;

const SearchText = styled.span`
  margin-right: 10px;
`;


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

const [messages, setMessages] = useState([]);
const [searchPhrase, setSearchPhrase] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSubmit = e => {
  e.preventDefault();

}

useEffect(() => {
  axiosWithAuth()
  .get(`/posts/posts`)
  .then(res => {
      console.log(res.data)
      setMessages(res.data)
  
  })
  .catch(err => console.log(err));
  
  const filterMessages = messages.filter(message =>
    {
      return Object.values(message).map(value => {
        return value;
      }).find(value => {
        return value.toString().toLowerCase().includes(searchPhrase.toString().toLowerCase());
      });
    });

    setSearchResults(filterMessages);
  }, [searchPhrase, ]);

  const handleChange = event => {
      setSearchPhrase(event.target.value);
  }

return (
    <MainContainer>
         <form>
            <SearchText>Search:</SearchText>
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
    </MainContainer>
);
}
export default MessageList;




