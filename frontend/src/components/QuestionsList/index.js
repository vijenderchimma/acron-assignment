import Tags from '../Tags'
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import './index.css'

const QuestionsList = (props) =>{
    const {question} = props

    return (
        <li>
            <hr />
            <div  className='item-list'>
            <div>
                <p className='title'>{question.title}</p>
                <ul className='tag-container'>
                    {question.tags.map(eachTag=>(
                        <Tags key = {eachTag} eachTag = {eachTag}/>
                    ))}
                </ul>
            </div>
            <div className='comments-container'>
                <div className='votes-container'>
                    {question.owner.accept_rate ? <p>{question.owner.accept_rate}</p> : <p>0</p>}
                    <p>Votes</p>
                    <AiOutlineLike />
                </div>
                <div className='answer-container'>
                    <p>{question.answer_count}</p>
                    <p>answers</p>
                    <MdOutlineModeComment />
                </div>
                <div className='views-container'>
                    <p>{question.view_count}</p>
                    <p>views</p>
                    <FaRegEye />
                </div>
            </div>
            </div>
        </li>
    )
}

export default QuestionsList