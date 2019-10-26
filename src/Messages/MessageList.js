import React, {useState, useEffect} from "react";
import MessageCard from "../Messages/MessageCard";
import styled from "styled-components";
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {connect} from "react-redux"
import {loadPost} from "../actions/index"

const MainContainer = styled.div`
  margin-top: 20px;
`;

const SearchText = styled.span`
  margin-right: 10px;
`;


const MessageList = (props) => {

  const [messages, setMessages] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect( () => {
    axiosWithAuth()
    .get(`/posts/posts`)
    .then(res => {
        console.log(res.data)
        setMessages(res.data.reverse())
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
      console.log(props.isFetching)
      setTimeout(() => {
        setFirstLoad(false) //this waits a second to let the messages populate, couldn't figure out a way for useEffect to run on start w/o class components
      }, 1000)
    }, [searchPhrase, firstLoad, props.isFetching]);

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
          <MessageCard message={message} key={message.id}/>
        ))}   
        {firstLoad ? <h3>loading...</h3> : <p></p> }   
      </MainContainer>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {loadPost})(MessageList);




