import {useState} from 'react';
import data from './data.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Reviews = () => {
  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = data[index];

  //check number for out-of-array-length bounds
  const checkNumber = (num) => {
    if(num > data.length - 1){
      return 0;
    }
    else if(num < 0){
      return data.length - 1;
    }
    return num;
  }
 //navigate to nxt person
  const nxtPerson = () => {
    let newIndex= index + 1
    setIndex(checkNumber(newIndex));
  }

  //navigate to prev person
  const prevPerson = () => {
    let newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  }

  //get random person
  const getRandom = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    if(randomNum === index){
      randomNum = randomNum + 1;
    } 
    setIndex(checkNumber(randomNum));
  }

  return(
    <div className= 'card'>
      <div className= 'image-wrap'>
        <img src={image} alt= {name} />
        <div className= 'quote-wrap'><FaQuoteRight className='quote' /></div>
      </div>
      <div className= 'title'>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
      <div className= 'content'>
        <p>{text}</p>
      </div>
      <div className= 'nav'> 
        <button className= 'btn-left' onClick= {prevPerson}>
          <FaChevronLeft />
        </button>
        <button 
          className= 'btn-right' onClick= {nxtPerson}>
          <FaChevronRight />
        </button>
      </div>
      <div className= 'suprise'>
      <button onClick= {getRandom}>Suprise Me</button>
      </div>
    </div>
  )
}

export default Reviews;


// //navigate to nxt person
  // const nxtPerson = () => {
  //   if(index === data.length - 1){
  //     setIndex(0)
  //   }
  //   else{
  //     setIndex(index + 1)
  //   } 
  // }

  // //navigate to prev person
  // const prevPerson = () => {
  //   if(index === 0){
  //     setIndex(data.length - 1)
  //   }
  //   else{
  //     setIndex(index - 1)
  //   }
  // }
