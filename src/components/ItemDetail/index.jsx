import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/index';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/index';
import './index.css'

const ItemDetail = ({ product }) => {
    const { id, name, brand, price, image1, image2, image3, stock, description, category, subcategory } = product;

    const [quantityAdded, setQuantityAdded] = useState('');
    const { cart, addItem, isInCart, getQuantity } = useContext(CartContext);

    //Función que se ejecuta al agregar un producto al carrito.
    //Verifica si el producto ya está en el carrito y si la cantidad a agregar supera el stock disponible.
    //Si la suma de la cantidad en el carrito y la cantidad a agregar excede el stock, ajusta la cantidad.
    //Luego, establece la cantidad añadida y agrega el producto al carrito con la cantidad especificada.
    const onAdd = (cantidad) => {
        console.log('quieres agregar', cantidad, 'al carrito:')
        if ((isInCart(id)) && (stock < (getQuantity(id) + cantidad))) {
            cantidad = stock - getQuantity(id);
            console.log('Agregaste el producto:', product, '\n Solo se agregaron:', cantidad, 'porque el stock es de:', stock, 'y tienes:', getQuantity(id), 'en el carrito')
        }
        else {
            console.log('Agregaste el producto:', product, '\n Lo ultimo agregado fue:', cantidad, ', aun no haz superado los:', stock, 'puedes seguir agregando este producto al carrito');
        }
        setQuantityAdded(cantidad);
        addItem(product, cantidad);
    };

    return (
        <div className="DetailContainer">
            <div className='DetailLinks'>
                <Link to={`/category/${category}`} className="DetailCat">
                    <p>{category}</p>
                </Link>
                <p className='symbol'>&gt; </p>
                <Link to={`/category/subcategory/${subcategory}`} className="DetailCat">
                    <p>{subcategory}</p>
                </Link>
            </div>
            <div className='DetailImg'>
                <img src={image1} alt={name} className="DetailImg1" />
                <img src={image2} alt={name} className="DetailImg2" />
                <img src={image3} alt={name} className="DetailImg3" />
            </div>

            <div className='DetailImgPhone'>
                <div id="carouselExample" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} alt={name} className="carousel-img" />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} alt={name} className="carousel-img" />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} alt={name} className="carousel-img" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="DetailInfo">
                <p className="DetailBrand">{brand}</p>
                <p className="DetailName">{name}</p>
                <p className="DetailPrice">${price}</p>
                <p className={`DetailStock ${stock > 0 ? 'GreenText' : 'RedText'}`}>Stock: {stock}</p>
                <div className='ItemCount'>
                    <ItemCount stock={stock} initial={0} onAdd={onAdd} />
                </div>
            </div>
            <div className='DetailOffCanvas'>
                <div>
                    <p data-bs-toggle="offcanvas" data-bs-target="#offcanvasA" aria-controls="offcanvasA" className='DetailNames'>+ RETURNS & EXCHANGES</p>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasA" aria-labelledby="offcanvasALabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasALabel">RETURNS & EXCHANGES</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className='changesAndReturns'>
                                <p className='changesAndReturns--title'>At Trinity Store, we strive to ensure your satisfaction with every purchase. We understand that sometimes situations may arise where you need to make changes or returns. We are here to make this process as smooth and convenient as possible.</p>
                                <div className='changesAndReturns--elem'>
                                    <p className='elem-title'>Changes:</p>
                                    <p className='elem-subtitle'>If you're unsatisfied with your purchase and want to exchange it for a different product, we're here to assist you. Just follow these easy steps:</p>
                                    <ol className='elem-list'>
                                        <li>
                                            Contact us within 3 business days from the date of purchase at +598 11 111 111.</li>
                                        <li>
                                            Please provide the purchase details and the item you wish to exchange.
                                        </li>
                                        <li>
                                            We will guide you to return the item in its original condition.
                                        </li>
                                        <li>
                                            We will process the change and send you the new item.
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <p className='elem-title'>Returns:</p>
                                    <p className='elem-subtitle'>If for some reason you need to make a return, here's how to do it:</p>
                                    <ol className='elem-list'>
                                        <li>
                                            Communicate your desire to return the item within 3 working days of your purchase at +598 22 222 222.</li>
                                        <li>
                                            Provide details of the purchase and the reason for the return.
                                        </li>
                                        <li>
                                            Please return the item in its original and safe condition.
                                        </li>
                                        <li>
                                            We will process the refund after inspecting the returned item.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <p data-bs-toggle="offcanvas" data-bs-target="#offcanvasB" aria-controls="offcanvasB" className='DetailNames'>+ PAYMENT METHODS</p>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasB" aria-labelledby="offcanvasBLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasBLabel2">PAYMENT METHODS</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p className='changesAndReturns--title'>At Trinity Store, we offer a variety of safe and convenient options for shopping. We want your shopping experience to be comfortable and reliable, which is why we accept the following means of payment.</p>
                            <p className='elem-title'>Installment plans:</p>
                            <div>
                                <div className='payments'>
                                    <div className='payments-u'>
                                        <img src="/visa.svg" alt="visa" className='img-card' />
                                        <p className='card-info'>up to 12 installments of ${(price / 12).toFixed(2)}</p>
                                    </div>
                                    <hr id='hr'/>
                                    <div className='payments-u'>
                                        <img src="/oca.svg" alt="oca" className='img-card' />
                                        <p className='card-info'>up to 6 installments of ${(price / 6).toFixed(2)}</p>
                                    </div>
                                    <hr id='hr' />
                                    <div className='payments-u'>
                                        <img src="/scotiabank.svg" alt="scotiabank" className='img-card' />
                                        <p className='card-info'>up to 10 installments of ${(price / 10).toFixed(2)}</p>
                                    </div>
                                    <hr id='hr' />
                                    <div className='payments-u'>  
                                        <img src="/master.svg" alt="master" className='img-card' />
                                        <p className='card-info'>up to 9 installments of ${(price / 9).toFixed(2)}</p>
                                    </div>
                                    <hr id='hr' />
                                    <div className='payments-u'>
                                        <img src="/bbvanet.svg" alt="bbvanet" className='img-card' />
                                        <p className='card-info'>up to 3 installments of ${(price / 3).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="DetailDescription">
                <p className="DetailDescription--title">About the product</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ItemDetail;