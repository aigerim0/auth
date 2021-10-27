import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {clearUser, isAuth} from "../../lib/authentication";
import {Link} from "react-router-dom";
import axios from "axios";

const Blog = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios("http://localhost:8080/api/v1/news")
            .then(({data}) => {
                setNews(data)
            })
    },[])
    return (
        <Layout>
          <div className='flex justify-between items-center'>
              <h2>News</h2>
              {
                  isAuth() &&       <Link to="/create-post"    className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg" >
                      Create post
                  </Link>
              }
          </div>

                {
                    news.map(item =>
                    <div key={item.key}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    )
                }

        </Layout>
    );
};

export default Blog;