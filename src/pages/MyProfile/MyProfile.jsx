import { useState } from "react";
import useAuth from "../../hocks/useAuth";
import { Helmet } from "react-helmet-async";




const MyProfile = () => {
 const {user} = useAuth();
 const [displayName, setDisplayName] = useState(user?.displayName || '');
 const [setProfilePicture] = useState(null);
 
    //handle update profile
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 my-7 container">
                            <div>
                    <Helmet>
                        <title>Newspaper || MyProfile</title>
                    </Helmet>
                </div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">


                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center items-center mt-4">
                        <img className="w-24 rounded-lg" src={user?.photoURL}  alt="" />
                    </div>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Update Profile
                        </h1>
                     
                        <form
                               onSubmit={handleUpdateProfile}
                            className="space-y-4 md:space-y-6">
                            <div>

                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Update Your Name
                                </label>
                  <input
                                    type="text"
                                    name="name"
                                    defaultValue={user?.displayName}
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    disabled={true}
                                    defaultValue={user?.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>


                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
                                    Update Your Photo
                                </label>
                                <input
                                    name="image"
                                    onChange={(e) => setProfilePicture(e.target.files[0])}
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="image"
                                    type="file"
                                />

                            </div>

                            <input className="btn  text-white hover:bg-[#5f59f7] w-full bg-[#343090]" type="submit" value="Update" />



                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;