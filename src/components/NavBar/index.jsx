import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import CartWidget from '../CartWidget/index'

function NavBar() {
    const [showCatContainer, setShowCatContainer] = useState(false);

    const handleMouseEnter = () => {
        setShowCatContainer(true);
    };

    const handleMouseLeave = () => {
        setShowCatContainer(false);
    };

    return (
        <nav className='nav' style={{ position: 'relative' }}> 
            <button className="btn btn-primary" type="button" id='nav-boton' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <img src="/menu.png" alt="menu-burger" className='menu-burger'/>
            </button>

            <div  className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <NavLink className='link' to='/Products'>
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">PRODUCTS</h5>
                    </NavLink>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='cat-container'>
                        <div className='cat-category'>
                            <NavLink className='link' to="/category/Skyn-Care">
                                <span className='cat-name'>Skin Care</span>
                            </NavLink>
                            <NavLink className='link' to="/category/subcategory/Facial-Cleansers-and-Exfoliants">
                                <span>Facial Cleansers and Exfoliants</span>
                            </NavLink>
                            <NavLink className='link' to="/category/subcategory/Moisturizers-and-Face-Creams">
                                <span>Moisturizers and Face Creams</span>
                            </NavLink>
                            <NavLink className='link' to="/category/subcategory/Sunscreens-and-After-Sun-Products">
                                <span>Sunscreens and After-Sun Products</span>
                            </NavLink>
                        </div>

                        <div className='cat-category'>
                            <NavLink className='link' to="/category/Hair-Care">
                                <span className='cat-name'>Hair Care</span>
                            </NavLink>
                            <NavLink className='link' to="/category/subcategory/Shampoos-and-Conditioners">
                                <span>Shampoos and Conditioners</span>
                            </NavLink>
                            <NavLink className='link' to='/category/subcategory/Hair-Treatments-and-Masks'>
                                <span>Hair Treatments and Masks</span>
                            </NavLink>
                            <NavLink className='link' to='/category/subcategory/Styling-Products'>
                                <span>Styling Products</span>
                            </NavLink>
                        </div>

                        <div className='cat-category'>
                            <NavLink className='link' to="/category/Body-Care">
                                <span className='cat-name'>Body Care</span>
                            </NavLink>
                            <NavLink className='link' to="/category/subcategory/Shower-Gels-and-Soaps">
                                <span>Shower Gels and Soaps</span>
                            </NavLink>
                            <NavLink className='link' to='/category/subcategory/Body-Lotions-and-Creams'>
                                <span>Body Lotions and Creams</span>
                            </NavLink>
                            <NavLink className='link' to='/category/subcategory/Deodorants-and-Antiperspirants'>
                                <span>Deodorants and Antiperspirants</span>
                            </NavLink>
                        </div>

                        <div className='cat-category'>
                            <NavLink className='link' to="/category/Health-and-Wellness">
                                <span className='cat-name'>Health and Wellness</span>
                            </NavLink>
                            <NavLink className='link' to="/category/subcategory/Vitamins-and-Nutritional-Supplements">
                                <span> Vitamins and Nutritional Supplements</span>
                            </NavLink>
                            <NavLink className='link' to='/category/subcategory/Pain-Relief-Products'>
                                <span>Pain Relief Products</span>
                            </NavLink>
                            <NavLink className='link' to='/category/subcategory/Measurement-Equipment'>
                                <span>Measurement Equipment</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-container'>
                <NavLink className='link' to='/' >
                    <span className='link-principal'>TRINITY STORE</span>
                </NavLink>
                
            </div>
            <div className='cartWidgetNav'>
                <NavLink to='/cart' className="CartWidgetNavbar">
                    <CartWidget />
                </NavLink>
            </div>
            <div className='nav-container2'>
                <NavLink
                    className='link'
                    to='/Products'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='link link-products' id='menu-burger'>
                        <img src="/menu.png" alt="menu-burger" className='menu-burgerD' />
                        <p>MENU</p>
                       
                    </div>
                </NavLink>
            </div>
            {showCatContainer && (
                <div
                    className='cat-container'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='cat-category'>
                        <NavLink className='link' to="/category/Skyn-Care">
                            <span className='cat-name'>Skin Care</span>
                        </NavLink>
                        <NavLink className='link' to="/category/subcategory/Facial-Cleansers-and-Exfoliants">
                            <span>Facial Cleansers and Exfoliants</span>
                        </NavLink>
                        <NavLink className='link' to="/category/subcategory/Moisturizers-and-Face-Creams">
                            <span>Moisturizers and Face Creams</span>
                        </NavLink>
                        <NavLink className='link' to="/category/subcategory/Sunscreens-and-After-Sun-Products">
                            <span>Sunscreens and After-Sun Products</span>
                        </NavLink>
                    </div>
                    
                    <div className='cat-category'>
                        <NavLink className='link' to="/category/Hair-Care">
                            <span className='cat-name'>Hair Care</span>
                        </NavLink>
                        <NavLink className='link' to="/category/subcategory/Shampoos-and-Conditioners">
                            <span>Shampoos and Conditioners</span>
                        </NavLink>
                        <NavLink className='link' to='/category/subcategory/Hair-Treatments-and-Masks'>
                            <span>Hair Treatments and Masks</span>
                        </NavLink>
                        <NavLink className='link' to='/category/subcategory/Styling-Products'>
                            <span>Styling Products</span>
                        </NavLink>
                    </div>
                    
                    <div className='cat-category'>
                        <NavLink className='link' to="/category/Body-Care">
                            <span className='cat-name'>Body Care</span>
                        </NavLink>
                        <NavLink className='link' to="/category/subcategory/Shower-Gels-and-Soaps">
                            <span>Shower Gels and Soaps</span>
                        </NavLink>
                        <NavLink className='link' to='/category/subcategory/Body-Lotions-and-Creams'>
                            <span>Body Lotions and Creams</span>
                        </NavLink>
                        <NavLink className='link' to='/category/subcategory/Deodorants-and-Antiperspirants'>
                            <span>Deodorants and Antiperspirants</span>
                        </NavLink>
                    </div>
                    
                    <div className='cat-category'>
                        <NavLink className='link' to="/category/Health-and-Wellness">
                            <span className='cat-name'>Health and Wellness</span>
                        </NavLink>
                        <NavLink className='link' to="/category/subcategory/Vitamins-and-Nutritional-Supplements">
                            <span> Vitamins and Nutritional Supplements</span>
                        </NavLink>
                        <NavLink className='link' to='/category/subcategory/Pain-Relief-Products'>
                            <span>Pain Relief Products</span>
                        </NavLink>
                        <NavLink className='link' to='/category/subcategory/Measurement-Equipment'>
                            <span>Measurement Equipment</span>
                        </NavLink>
                    </div>
                </div>
            )}

        </nav>
    );
}
export default NavBar;
