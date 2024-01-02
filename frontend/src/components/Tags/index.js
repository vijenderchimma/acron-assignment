import './index.css'
const Tags = (props) =>{
    const {eachTag} = props
    
    return (
        <li className='tag-item'>{eachTag}</li>
    )
 }

 export default Tags