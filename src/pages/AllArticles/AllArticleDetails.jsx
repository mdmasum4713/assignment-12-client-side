import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AllArticleDetails = () => {
    const [card, setCard] = useState({})
    const { _id } = useParams()
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                const result = data.find(item => item._id == _id)
                setCard(result);
            })
    }, [_id])
    // console.log(card);
    const { image, title, publisher, description,  } = card
    return (
        <div className="card card-side bg-base-100 shadow-xl w-full mt-10 mb-10 grid grid-cols-1 md:grid-cols-2">
        <figure><img className="w-full h-80" src={image} alt="Movie" /></figure>
        <div className="card-body w-full  ">
            <h2 className="card-title text-4xl">NewsPaper: {title}</h2>
            <h2 className="card-title text-3xl font-normal">Publisher: {publisher}</h2>
            <h2 className="card-title text-2xl">Description: {description}</h2>
            <div className="card-actions justify-end">
                <Link to="/"> <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <button>Back Home</button>
                </a></Link>
            </div>
        </div>
    </div>
    );
};

export default AllArticleDetails;