import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProject } from '../utils/projectsSlice';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await axios.get('https://iiit-colloboration-app-backend-2.vercel.app/api/v1/getallpublicrepos');
    const data = response.data.publicRepos;
    console.log({ data });
    setProjects(data);
    dispatch(addProject(data));
  }, [])
  return (
    <div>HomePage</div>
  )
}

export default HomePage