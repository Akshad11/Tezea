import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready To Get Started?</h3>
                            <h3>Talk to us Today.</h3>
                        </div>

                        <div>
                            <Button className="btn hireme-btn">
                                <NavLink to="/">Get Started</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                {/*This is Footer section*/}

                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3>Trezea</h3>
                            <p>Our team of gardening experts is always on hand to offer personalized advice
                                and support to help you grow your best garden yet.
                            </p>
                        </div>

                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            <form action="#">
                                <input type="email" name="email" placeholder="Your E-mail" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>

                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="footer-social-icons">
                                <div>
                                    <FaFacebookF className="icons" />
                                </div>
                                <div>
                                    <FaInstagram className="icons" />
                                </div>
                                <div>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3>Call us</h3>
                            <h3>+91 1234567892</h3>
                        </div>
                    </div>

                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column">
                            <p>
                                @{new Date().getFullYear()} Trezea inc. All rights reserved
                            </p>
                            <div>
                                <p>PRIVACY & POLICY</p>
                                <p>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
.iSIFGq {
    margin: 0;
}

.contact-short{
    display: grid;
    align-item: center;
    max-width: 60vw;
    margin: auto;
    padding: 5rem 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 2rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(25%);
    
    .grid div:last-child {
        justify-self: end;
        align-self: center;
    }

    .btn hireme-btn {
        color: ${({ theme }) => theme.colors.text};
    }


}

footer {
    padding-top: 7.5rem;
    background-color: rgba(64, 97, 26, 1);

    h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2.4rem;
    }

    p{
        color: ${({ theme }) => theme.colors.white};
    }

    .footer-social-icons {
        display: flex;
        gap: 2rem;
    

        div {
         padding: 1rem;
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.colors.white};
    

            .icons {
             color: #FFF;
             font-size: 2.4rem;
             position: relative;
             cursor: pointer;
            }
        }
    }
    
}

.footer-bottom--section {
    padding-top: 9rem;

    hr{
        margin-bottom: 2rem;
        color:${({ theme }) => theme.colors.hr};
        height: 0.1px;
    }
}

@media (max-width ${({ theme }) => theme.media.mobile}) {
    .contact-short {
        max-width: 80vw;
        margin: 4.8rem auto;
        transofrm: translateY(0%);
        text-align: center;

        .grid div: last-child {
            justify-self: center;
        }
    }

    footer {
        padding: 9rem 0 9rem 0;
    }
}`;

export default Footer;