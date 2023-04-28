import React, { Component } from 'react'
import menu1 from '../images/menu-1.png'
import menu2 from '../images/menu-2.png'
import menu3 from '../images/menu-3.png'
import menu4 from '../images/menu-4.png'
import menu5 from '../images/menu-5.png'
import menu6 from '../images/menu-6.png'
import prod1 from '../images/product-1.png'
import prod2 from '../images/product-2.png'
import prod3 from '../images/product-3.png'

export default class Menu extends Component {
    render() {
        return (
            <>
                <section className="menu" id="menu">

                    <div className="box-container">

                        <div className="box">
                            <img src={menu1} alt="" />
                            <h3>Cappuccino</h3>
                            <div className="price">$13.99 <span>18.99</span></div>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src={menu2} alt="" />
                            <h3>Espresso</h3>
                            <div className="price">$15.99 <span>20.99</span></div>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src={menu3} alt="" />
                            <h3>Latte</h3>
                            <div className="price">$16.99 <span>22.99</span></div>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src={menu4} alt="" />
                            <h3>Flat white</h3>
                            <div className="price">$17.99 <span>23.99</span></div>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src={menu5} alt="" />
                            <h3>Latte macchiato</h3>
                            <div className="price">$14.99 <span>19.99</span></div>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                        <div className="box">
                            <img src={menu6} alt="" />
                            <h3>Affogato</h3>
                            <div className="price">$15.99 <span>20.99</span></div>
                            <a href="#" className="btn">add to cart</a>
                        </div>

                    </div>

                </section>
                <section class="products" id="products">

                    <h1 class="heading"> our <span>products</span> </h1>

                    <div class="box-container">

                        <div class="box">
                            <div class="icons">
                                <a href="#" class="fas fa-shopping-cart"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src={prod1} alt=""/>
                            </div>
                            <div class="content">
                                <h3>Nicaragua coffee</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="price">$19.99 <span>$25.99</span></div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="icons">
                                <a href="#" class="fas fa-shopping-cart"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src={prod2} alt=""/>
                            </div>
                            <div class="content">
                                <h3>Columbia coffee</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>

                                </div>
                                <div class="price">$16.99 <span>$20.99</span></div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="icons">
                                <a href="#" class="fas fa-shopping-cart"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src={prod3} alt=""/>
                            </div>
                            <div class="content">
                                <h3>Peru coffee</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="price">$15.99 <span>$20.99</span></div>
                            </div>
                        </div>

                    </div>

                </section>
            </>
        )
    }
}
