import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hocks/useAxiosPublic";
import useAxiosSecure from "../../hocks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hocks/useAuth";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddArticle = () => {
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { 
                'content-Type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            //now send the menu item data to the server with the image
        const newsItem = {
            userEmail: user.email,
            title: data.title,
            tags: data.tags,
            publisher: data.publisher,
            description: data.description,
            image: res.data.data.display_url
        }
        // 
        const newsRes = await axiosSecure.post('/news', newsItem);
        console.log(newsRes.data);
        if(newsRes.data.insertedId){
            //show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is added to the news`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        }
        console.log('with image url',res.data);
    };

    return (
        <div className="gadgetContainer pt-10 container px-4 mx-auto mb-4">
            <Helmet>
                <title>Newspaper || AddArticle</title>
            </Helmet>
            <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="dark:text-white font-bold ">
                            Add Article Page
                        </span>
                    </p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="form-control w-full  my-6">
                                <div className="label">
                                    <span className="label-text"> Title?</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Title here"
                                    {...register('title', {required: true})}
                                    className="input input-bordered w-full " />

                            </label>
                        </div>
                        <div className="flex gap-5">
                            {/* tags*/}
                            <select  defaultValue='default' {...register('tags', {required: true})}
                                className="select select-bordered w-full my-8 ">
                                <option disabled value='default'>select a tags</option>
                                <option>Politics</option>
                                <option>Business</option>
                                <option>Technology</option>
                                <option>Entertainment</option>
                            </select>

                            {/* publisher */}

                            <label className="form-control w-full  ">
                                <div className="label">
                                    <span className="label-text"> Publisher?</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="publisher here"
                                    {...register('publisher', {required: true})}
                                    className="input input-bordered w-full " />

                            </label>

                        </div>
                        {/* description */}
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">description</span>
                            </div>
                            <textarea  {...register('description', {required: true})} className="textarea textarea-bordered h-24" placeholder="description"></textarea>

                        </label>
                        <div className="my-4">
                            <input {...register('image', {required: true})}  type="file" className="file-input w-full max-w-xs" />
                        </div>

                       <button className="btn btn-outline w-full">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddArticle;