import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {clearUser, isAuth} from "../../lib/authentication";
import {Link} from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";

const Blog = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios("http://localhost:8080/api/v1/news")
            .then(({data}) => {
                setNews(data)
                setIsLoading(false)
            })
    },[])

    if(isLoading){
       return <Loading/>
    }
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
                        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20" key={item._id}>

                            <div>
                                <Link to={`/news/${item._id}`}>
                                    <h2 className="text-gray-800 text-3xl font-semibold"> {item.title}</h2>
                                </Link>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                            <div className="flex justify-end mt-4 ">
                                <Link to={`/user/${item?.user?._id}`} class="text-xl font-medium text-indigo-500">{item?.user?.name}</Link>
                            </div>
                        </div>

                    )
                }


        </Layout>
    );
};

export default Blog;