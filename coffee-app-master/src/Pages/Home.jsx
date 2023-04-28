import React, { Component } from 'react'
import Backimg from "../images/home-img.jpeg";
import Pop_up from './Pop_up';

// import images in review 
import quoteimg from "../images/quote-img.png";
import Amir from "../images/Amir.png";
import Veronika from "../images/Veronika.png";
import Irina from "../images/Irina.png";

import Blog1 from "../images/blog-1.jpeg";
import Blog2 from "../images/blog-2.jpeg";
import Blog3 from "../images/blog-3.jpeg";

export default class Home extends Component {
    render() {
        return (
            <>
                <section className="home" id="home" style={{ backgroundImage: `url(${Backimg})`}}>
                    <div className="content">
                        <h3>fresh coffee in the morning</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
                        <a href="#contact" class="btn">get yours now</a>
                    </div>
                </section>

                <section className="review" id="review">

                    <h1 className="heading"> customer's <span>review</span> </h1>

                    <div className="box-container">

                        <div className="box">
                            <img src={quoteimg} alt="" className="quote"/>
                                <p>Quality coffee! I always buy in this store and drink with pleasure every day!</p>
                                <img src={Amir} className="user" alt=""/>
                                    <h3>Zhumagali Amir</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>

                                <div className="box">
                                    <img src={quoteimg} alt="" className="quote" />
                                    <p>The most suitable kind of coffee for a perfect morning. Absolutely everyone in the family liked it! Chocolate-nutty notes and no bitterness.</p>
                                    <img src={Veronika} className="user" alt="" />
                                    <h3>Veronika Loenko</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>

                                <div className="box">
                                    <img src={quoteimg} alt="" className="quote" />
                                    <p>My coffee discovery - Do you, like me, think that hot, dark roasted coffee is a bitter pill that you want to drink with a liter of water? No, when you drink Melitta Bella Crema Espresso it is a noble, delicious, velvety drink.</p>
                                    <img src={Irina} class="user" alt="" />
                                    <h3>Korolyeva Irina</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>

                        </div>

                </section>

                <section className="blogs" id="blogs">

                    <h1 className="heading"> our <span>blogs</span> </h1>

                    <div className="box-container">

                        <div className="box">
                            <div className="image">
                                <img src={Blog1} alt=""/>
                            </div>
                            <div className="content">
                                <a href="#" className="title">tasty coffee</a>
                                <span> 21st may, 2022</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                <Pop_up name='Tasty coffee'/>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Blog2} alt=""/>
                            </div>
                            <div className="content">
                                <a href="#" className="title">refreshing coffee</a>
                                <span> 21st may, 2021</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                <Pop_up name='Refreshing coffee'/>
                            </div>
                        </div>

                        <div className="box">
                            <div className="image">
                                <img src={Blog3} alt=""/>
                            </div>
                            <div className="content">
                                <a href="#" className="title">tasty and refreshing coffee</a>
                                <span> 21st may, 2021</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                <Pop_up name='Tasty and refreshing coffee'/>
                            </div>
                        </div>

                    </div>

                </section>
            </>
        )
    }
}
