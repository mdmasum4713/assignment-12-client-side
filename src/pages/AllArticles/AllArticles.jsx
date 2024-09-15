import { useLoaderData } from "react-router-dom";
import AllArticlesCart from "./AllArticlesCart";
import { Helmet } from "react-helmet-async";

const AllArticles = () => {
    const allArticles = useLoaderData();
    return (
        <div>
            <div>
                <Helmet>
                    <title>Newspaper || AllArticles</title>
                </Helmet>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mt-8 mx-auto gap-8 mb-8 ">

                {
                    allArticles.map(allArticles => <AllArticlesCart
                        key={allArticles._id}
                        allArticles={allArticles}
                    >
                    </AllArticlesCart>)
                }
            </div>
        </div>
    );
};

export default AllArticles;