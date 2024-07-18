import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



function FetchData({category}) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        
        await axios
        .get(category ? `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=af10d808a3144b02b40797149a9d32fe`
            : "https://newsapi.org/v2/top-headlines?country=in&apiKey=af10d808a3144b02b40797149a9d32fe"
            
            
        ).then((res) => setData(res.data.articles))
        
    };



    useEffect(() => {

        fetchData();

    }, [category])


    return (
        <div>
            <div className=" flex flex-col ">
                <div>
                    <h1 className=' text-2xl text-red-600 mb-5 mt-[5rem] font-bold'>TOP HEADLINES</h1>
                </div>
                {
                    data.map((item) => {

                        return (
                            <div className=' flex flex-col border-1 shadow-xl  ml-[5rem] mr-[5rem] mb-[3rem]'>


                                <h1 className="text-black font-semibold text-lg leading-6 ml-2 mt-5 mb-2">
                                    {

                                        item.title.length > 60?
                                            (item.title.substr(0, 60)) + "..." 
                                            :(item.title)
                                    }

                                </h1>
                                
                                <div className=' mx-auto rounded-md'>
                                    <img src={item.urlToImage} alt='error' className='w-[25rem] h-[15rem]' />
                                </div>



                                <div className=' mr-[2rem] ml-[2rem]'>

                                    <p className='mt-4 text-black cursor-pointer  '>
                                     {item.description}

                                    </p>
                                    <a href={item.url} className=' text-blue-700 underline'>Read More</a>

                                </div>
                            </div>

                        )
                    })
                }
            </div>
           
        </div>

    )
}

export default FetchData
