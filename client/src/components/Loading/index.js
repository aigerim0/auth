import React from 'react';
import './style.css'
import Layout from "../Layout";

const Loading = () => {
    return (
     <div>
       <div className='flex justify-center'>
           <div className="orbit-spinner loading">
               <div className="orbit"></div>
               <div className="orbit"></div>
               <div className="orbit"></div>
           </div>
       </div>
     </div>
    );
};

export default Loading;