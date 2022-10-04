import { FC } from "react";
import BookCard from "../../components/bookcard/BookCard";
import Navbar from '../../components/navbar/navbar';

interface LandingProps {
    
}
 
const Landing: FC<LandingProps> = () => {
    return (
        <div>
            <Navbar />
            <BookCard />
        </div>
    );
}
 
export default Landing;