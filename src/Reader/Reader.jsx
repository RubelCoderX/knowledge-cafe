import React, { useEffect, useState } from 'react';
import './Reader.css';
import Blog from '../Blog/Blog';

const Reader = () => {
    const[blogs, setBlogs] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])

    return (
        <div className='reader-container'>
            <div className="blog-container">
                <h2>Blog are comming here : {blogs.length}</h2>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    
                    ></Blog>)
                }
            </div>
            <div className="cart-container">
                <p>Spent time on read :</p>
                <h3>Bookmarked Blogs :</h3>
            </div>
        </div>
    );
};

export default Reader;