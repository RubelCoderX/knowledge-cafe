import React from 'react';
import './Blog.css';
import logo from '../images/boy1.png';

const Blog = (props) => {
    // console.log(props.blog);
    const{img,name,date,title} =props.blog;
    // const[img, name] =props.blog;
    return (
        <div id='container'>
            <img src={img} alt="" />
           <div id="item">
                <img src={logo} alt="" />
                <div className="profile">
                <h4>{name}</h4>
                
                <p>{date}</p>
                </div>
                <div className='right-side'>
                    <h3>This is blog</h3>
                </div>
           </div>
           <h2>{title}</h2>
           <h5>#beginners #programming</h5>

           <button className='button'>Mark as read</button>
                
            
        </div>
    );
};

export default Blog;