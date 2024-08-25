import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Ensure the modal is attached to the root element
Modal.setAppElement('#root');

const ProjectPage = () => {
    const params = useParams();
    const [repo, setRepo] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    const { openedProject } = useSelector(state => state.projects);

    useEffect(() => {
        if (openedProject) {
            setRepo(openedProject.repo);
        }
    }, [openedProject]);

    const downloadZipFile = async () => {
        try {
            const response = await axios.get(`https://iiit-colloboration-app-backend-2.vercel.app/api/v1/redirect/${params.projectId}`);
            const redirectLink = response.data.link;
            window.location.href = redirectLink;
        } catch (error) {
            console.error("Failed to download the project file", error);
        }
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const [collaborators, setCollaborators] = useState([]);
    const addCollaboratorFunction = async () => {
        try {
            const collaboratorName = document.querySelector('input').value;
            collaborators.push(collaboratorName);
            const response = await axios.post(`https://iiit-colloboration-app-backend-2.vercel.app/api/v1/addcollaborator/${params.projectId}`, {
                collaborators,
            });
            console.log({ response });
        } catch (error) {
            console.error("Failed to add collaborator", error);
        }
        closeModal();
    }

    return (
        repo && (
            <div className="max-w-3xl mx-auto my-12 p-10 bg-gray-100 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{repo.name}</h1>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h2 className="text-sm font-medium text-gray-600">Collaborators</h2>
                        <p className="text-base text-gray-900">{repo.collaborators}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium text-gray-600">Likes</h2>
                        <p className="text-base text-gray-900">{repo.likeCount}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium text-gray-600">Project Type</h2>
                        <p className="text-base text-gray-900">{repo.type}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium text-gray-600">Uploaded By</h2>
                        <p className="text-base text-gray-900">{repo.uploadedBy}</p>
                    </div>
                </div>

                <button
                    onClick={downloadZipFile}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition-colors duration-300 ease-in-out mb-4"
                >
                    Download Project
                </button>

                <button
                    onClick={openModal}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors duration-300 ease-in-out"
                >
                    Add Collaborator
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Add Collaborator Modal"
                >
                    <h2 className="text-xl font-semibold mb-4">Add Collaborator</h2>
                    <button onClick={closeModal} className="text-red-500 hover:text-red-700 transition duration-200 mb-4">Close</button>
                    <div>
                        <form>
                            <input
                                className="w-full mb-4 p-2 border rounded"
                                placeholder="Enter collaborator's name"
                            />
                            <button
                                onClick={addCollaboratorFunction}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-300 ease-in-out"
                            >
                                Add Collaborator
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    );
};

export default ProjectPage;
