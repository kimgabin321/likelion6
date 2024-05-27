import styled from 'styled-components';
import logo from '../images/home_image.png';
import image1 from '../images/home_1.jpg';
import image2 from '../images/home_2.jpg';
import image3 from '../images/home_3.jpg';

const StyledImg = styled.img`
    width: 90%; 
    height: 550px; 
    margin-left: 5%;
`;

const HomeH1 = styled.h1`
    text-align: center;
    font-size: 70px;
    font-weight: bold; 
    margin-top: -10px;
`;

const HomeImages = styled.div`
    display: flex;
    justify-content: space-around; 
    margin-top: 20px; 
`;

const HomeImage = styled.img`
    width: 350px;
    height: 250px;
`;

export default function HomePage() {
    return(
        <>
            <StyledImg src={logo} alt="Logo" />
            <HomeH1>Who We Are</HomeH1>
            <HomeImages>
                <HomeImage src={image1} alt="Image 1" />
                <HomeImage src={image2} alt="Image 2" />
                <HomeImage src={image3} alt="Image 3" />
            </HomeImages>
        </>
    );
}
