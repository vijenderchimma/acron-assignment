
import React, { useState, useEffect } from 'react';
import { FcMenu } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";

import QuestionsList from '../QuestionsList'
import './index.css'

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  const [searchInput,setSearchInput] = useState()

  useEffect(() => {
    // Fetch data from StackExchange API when the component mounts
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      // Fetch data from StackExchange API
      const response = await fetch(
        'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow'
      );

      if (response.ok) {
        const data = await response.json();
        // Update the state with the fetched questions
        setQuestions(data.items);
        console.log(data.items)
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <div className='question-main-container'>
      <div className='menu-container'>
          <FcMenu />
          <div className='search-container'>
              <IoSearch />
              <input value={searchInput} className='search-input' type = "search" placeholder='Search' onChange={onChangeSearchInput} />
          </div> 
      </div>
      <h2>Questions</h2>
      <div>
        <button className='button'>interesting</button>
        <button className='button'>featured</button>
        <button className='button'>hot</button>
        <button className='button'>week</button>
        <button className='button'>month</button>
      </div>
      <ul className='list-container'>
        {questions.map((question) => (
          <QuestionsList question = {question} key = {question.question_id} />
        ))}
      </ul>
    </div>
  );
};

export default Questions;
