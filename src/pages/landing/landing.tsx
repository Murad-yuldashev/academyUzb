import { FC } from "react";
import Added from "../../components/Added/Added";
import BookCard from "../../components/bookcard/BookCard";
import Letter from "../../components/letter/Letter";
import BookSlider from "../../components/slider/BookSlider";

interface LandingProps {
    
}
 
const Landing: FC<LandingProps> = () => {
    return (
        <div>
            <BookCard />
            <BookSlider />
            <Added />
            <Letter />
        </div>
    );
}
 
export default Landing;