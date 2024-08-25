import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { downloadProject, openProject } from '../redux/actions/project';

const ProjectPage = () => {
    const params = useParams();
    const [repo, setRepo] = useState(null);

    const { openedProject } = useSelector(state => state.projects);

    useEffect(() => {
        if (openedProject) {
            setRepo(openedProject.repo);
        }
    }, [openedProject])

    const dispatch = useDispatch();

    const downloadZipFile = async () => {
        await dispatch(downloadProject(repo._id));
    }

    return (
        repo && <div>
            <div>{repo.name}</div>
            <div
                onClick={downloadZipFile}
                className='cursor-pointer bg-blue-500 text-white p-2 rounded-lg'
            >download project</div>
        </div>
    )
}

export default ProjectPage
