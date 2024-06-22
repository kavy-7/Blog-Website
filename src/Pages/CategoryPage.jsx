import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
            <Header />
            <div className="my-[100px]">
                <div className=" flex gap-x-5 items-center ">
                    <button onClick={() => navigation(-1)} className="border-2 border-gray-300 py-1 px-4 rounded-md">Back</button>
                    <h2 className="font-bold text-xl ">
                    Blogs On <span className='underline'>{category}</span>
                    </h2>
                </div>
                <Blogs />
            </div>
            <Pagination />
        </div>
    )
}

export default CategoryPage