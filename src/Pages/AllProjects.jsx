import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const AllProjects = () => {


    const [myProjects, setMyProjects] = useState([]);

    const projectsArray = useSelector((state) => state.projects);

    console.log({ myProjects });

    useEffect(() => {
        setMyProjects(projectsArray);
    }, [projectsArray])

    useEffect(() => {
        console.log({ myProjects });
    }, [myProjects])


    return (
        <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
            <table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
                <thead className='text-xs uppercase bg-glass'>
                    <tr>
                        <th scope='col' className='p-4'>
                            <div className='flex items-center'>No</div>
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Project Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Created By
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Likes
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr className='bg-glass border-b'>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AllProjects
