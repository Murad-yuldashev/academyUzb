import { FC } from "react";
import Added from "../../components/Added/Added";
import Header from "../../components/header/Header";
import Letter from "../../components/letter/Letter";
import BookSlider from "../../components/slider/BookSlider";


 
const Home = () => {
    return (
        <div>
            <Header />
            <BookSlider />
            <Added />
            <Letter />
        </div>
    );
}
 
export default Home;