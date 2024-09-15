import { Helmet } from "react-helmet-async";



const MyArticles = () => {

  




    // console.log(articles);


    return (
        <div className="container mx-auto pt-6 mt-10">
                            <div>
                    <Helmet>
                        <title>Newspaper || MyArticles</title>
                    </Helmet>
                </div>
            <div className="text-center">
                <h2 className="noto-700 text-3xl">Here Your Posted Articles</h2>
                <p className="noto-500">Here You can update, delete your articles</p>
            </div>
            <div className="overflow-x-auto mt-10 rounded-t-lg">

                <table className="table">
                    {/* head */}
                    <thead className="noto-600 bg-[#5f59f7] text-white shadow-xl">
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Details</th>

                            <th>Status</th>
                            <th>isPremium</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>

                    </thead>

                    <tbody className="noto-500">





                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default MyArticles;






// import useAuth from "../../hocks/useAuth";
// import useAxiosSecure from "../../hocks/useAxiosSecure";

// const MyArticles = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure()
//     const res =  axiosSecure.get(`/myNews/${user?.email}`);

//     console.log(res.data);


// return (
//     <div>
//         <h2>hello</h2>
//     </div>
// );
// };

// export default MyArticles;