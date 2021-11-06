import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";
import Loading from "../../components/Loading";

const UserInfo = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`http://localhost:8080/api/v1/user/${id}`)
            .then(({data}) => {
                setUser(data)
                setIsLoading(false)
            })

    }, [id])
if (isLoading){
    return <Loading/>
}
    return (
        <div>
                <div className="w-full bg-gray-800">
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="text-center pb-12">
                            <h2 className="text-base font-bold text-indigo-600">
                                We have the best equipment in the market
                            </h2>
                            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                                Check our awesome team memwhite
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36"
                                         src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                         alt="photo"/>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-white font-bold mb-2">{user.name}</p>
                                    <p className="text-base text-gray-400 font-normal">{user.email}</p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">

                                <div className="text-center">
                                    {
                                        user.news.map(item =>
                                         <div>
                                             <p className="text-xl text-white font-bold mb-2">{item.title}</p>
                                             <p className="text-base text-gray-400 font-normal">{item.description}</p>
                                         </div>

                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </section>
            </div>
        </div>
    );
};

export default UserInfo;