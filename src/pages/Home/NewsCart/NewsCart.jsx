
const NewsCart = ({newsCarts}) => {
    const { name, title, image } = newsCarts;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-4 w-full ">
                <h2 className="text-2xl font-bold tracking-wide">Post Title: {name}</h2>
                <p className="text-xl ">Category: {title}</p>
            </div>
      
            </div>
    </div>
    );
};

export default NewsCart;