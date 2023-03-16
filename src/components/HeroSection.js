import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
    const { name } = myData;

    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-two-column">
                    <div className="hero-section-data">
                        <p className="intro-data">Welcome To</p>
                        <h1>{name}</h1>
                        <p className="into-data-para">
                            Trezea is a leading e-commerce platform for all things gardening.
                            Our mission is to make gardening accessible and enjoyable for everyone,
                            regardless of experience or skill level. With a wide selection of products,
                            including plants, seeds, garden tools, and accessories, we aim to provide our
                            customers with everything they need to create the garden of their dreams. Our
                            knowledgeable team of experts is dedicated to providing personalized support and
                            advice to help customers find the perfect products to meet their needs. Whether you're
                            an experienced gardener or just starting out, Trezea is here to help you grow.
                        </p>
                        <NavLink>
                            <Button>Show now</Button>
                        </NavLink>
                    </div>
                    {/*Home page image*/}
                    <div className="hero-section-image">
                        <figure>
                            <img src="images/homeHeroSec.jpg" alt="hero-section-p" className="img-style" />
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
padding:12rem 0;

img{
    min-width: 35rem;
    height: 35rem;
}

.hero-section-data{
    p{
        margin: 2rem 0;
    }

    h1{
        text-transform: captialize;
        font-weight: bold;
    }

    .intro-data{
        margin-bottom: 0;
        color: #000000;
        
    }

    .intro-data-para {
        text-align: center;
    }

}
.hero-section-image{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    figure{
        position: relative;

        &::after{
            content: "";
            width: 100%;
            height: 100%;
            background-color: rgba(229, 144, 2, 1);
            position: absolute;
            left: 12.5%;
            top: -5rem;
            z-index: -1;
        }
    }

    .image-style{
        width: 100%;
        height: auto;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid{
            gap: 10rem;
        }

        figure::after {
            content: "";
            width: 50%;
            height: 100%;
            left: 0;
            top: 10%;
            background-color: rgba(229, 144, 2, 1);
        }
    }

`;

export default HeroSection;
