import { Link } from "react-router-dom";

const AllArticlesCart = ({ allArticles }) => {
    const { _id, title, image, description, publisher } = allArticles;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-4 w-full ">
                    <h2 className="text-2xl font-bold tracking-wide">Post Title: {title}</h2>
                    <p className="text-xl ">Category: {title}</p>
                    <p>Publisher: {publisher}</p>
                </div>
                <span>this is description: {description}</span>

            </div>
            <div className="text-center">
                <Link to={`/articlesDetails/${_id}`} href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">ViewDetails</span>
                </Link>
            </div>
        </div>
    );
};

export default AllArticlesCart;