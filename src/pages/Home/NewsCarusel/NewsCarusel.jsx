
const NewsCarusel = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src="https://i.ibb.co/51R6LQc/extra1.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl  ">Daily News</h3>
                        <p>Newspapers have been a part of our life for a long time now, but with the changing modern times and digital media, the value of reading newspapers has become limited</p>
                    </div>
                </a>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/2SKr1mP/extra2.jpg" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold hover:no-underline  ">Newspaper Reading</h3>
                            <p>Newspapers are one of the most important documents. They can be said to be the powerhouse of information. Moreover, they offer us other benefits as well which helps us in our lives.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/Y2wMMwS/extra3.jpg" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold">Long and Short</h3>
                            <p>You will find below a number of short and long paragraphs on the topic Newspaper of varying word lengths.
                                We hope these paragraphs on Newspaper will help students in completing their school assignments.
                                These will also help children to write and read out paragraphs </p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/JtmmtHw/extra4.png" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Daily Citizen</h3>
                            <p>Daily Citizen, your trusted source for unbiased news,  Our dedicated team ensures you stay informed with in-depth analysis and balanced reporting. From politics to culture, we provide the insights you need to navigate </p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/JjPYpX1/extra5.webp" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Wall Street Journal</h3>
                            <p>The Wall Street Journal (WSJ) is a renowned American business-focused international daily newspaper. It is published in New York City by Dow Jones & Company, a division of News Corp. Here are some key details about The Wall Street Journal</p>

                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/92xGFrb/extra6.jpg" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Independent</h3>
                            <p>
                                The Independent is a prominent British online newspaper known for its comprehensive news coverage and progressive editorial stance. Here are key details about The Independent</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/Y2wMMwS/extra3.jpg" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Boston Globe</h3>
                            <p>The Boston Globe is a well-established American daily newspaper known for its comprehensive local and national news coverage. Here are key details about The Boston Globe</p>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                </div>
            </div>
        </section>
    );
};

export default NewsCarusel;