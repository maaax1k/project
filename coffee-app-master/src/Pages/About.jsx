import React, { Component } from 'react'
import about_img from '../images/about-img.jpeg'

export default class About extends Component {
    render() {
        return (
            <>
                <section className="about" id="about">

                    <div className="row">

                        <div className="image">
                            <img src={about_img} alt="" />
                        </div>

                        <div className="content">
                            <h3>what makes our coffee special?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                            <a href='#' className="btn">learn more</a>
                        </div>

                    </div>

                </section>
                <section className="contact" id="contact">
                <h1 class="heading"> <span>contact</span> us </h1>
                    <div className="row">
                        
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.5737143016854!2d76.92547801535149!3d43.218429679138616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f30f7a99069%3A0x7adb88ae41e2c540!2sEsentai%20Mall!5e0!3m2!1sru!2skz!4v1666292588802!5m2!1sru!2skz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='mapa'></iframe>"

                        <form action="">
                            <h3>get in touch</h3>
                            <div className="inputBox">
                                <span className="fas fa-user"></span>
                                <input type="text" placeholder="name"/>
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-envelope"></span>
                                <input type="email" placeholder="email"/>
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-phone"></span>
                                <input type="number" placeholder="number"/>
                            </div>
                            <input type="submit" value="contact now" className="btn"/>
                        </form>

                    </div>


                </section>
            </>
        )
    }
}
