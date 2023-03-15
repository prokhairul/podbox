/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Nav></Nav>
            <section class="page_404">
                <div class="container mx-auto">
                    <div class="row-404">

                        <div class="items-center">
                            <div class="text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>
                                </div>
                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>
                                    <p>the page you are looking for not available!</p>
                                    <Link to='/'> <a href="" class="link_404">Go to Home</a></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;