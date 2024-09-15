import { Helmet } from "react-helmet-async";
import Banner from "../Carousel/Banner";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";
import NewsCarusel from "../NewsCarusel/NewsCarusel";
import TextTest from "../../TextTest/TextTest";

const Home = () => {
    const newsCart = useLoaderData();
    return (
        <div className="">
            <Helmet>
                <title>Newspaper || Home</title>
            </Helmet>
            <Banner></Banner>
        <div>
            <hr />
            <div className="text-center my-6">
                <h2 className="text-3xl my-2">NewsPaper</h2>
                <p>Newspapers are published in many languages. They may be dailies, <br /> published every day, or weeklies, published each week. Printed <br /> on newsprint, newspapers contain news and views on varied topics. <br /> The news published may be on politics, economy, society, business, </p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mt-8 mx-auto gap-8 mb-8 ">
                {
                    newsCart.map(newsCarts => <NewsCart
                        key={newsCarts._id}
                        newsCarts={newsCarts}
                    >
                    </NewsCart>)
                }
            </div>
            <div>
                <NewsCarusel></NewsCarusel>
            </div>
          <div className="mt-4 mb-4">
            <TextTest></TextTest>
          </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;