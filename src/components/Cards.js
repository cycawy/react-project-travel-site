import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import ImageEight from "../images/img-8.jpg";
import ImageOne from "../images/img-1.jpg";
import ImageTwo from "../images/img-2.jpg";
import ImageThree from "../images/img-3.jpg";
import ImageFour from "../images/img-4.jpg";
import ImageFive from "../images/img-5.jpg";


function Cards(){
    return(
        <div className='cards'>
            <h1>Check out these EPIC destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem 
                            // src="../images/img-8.jpg"
                            src={ImageEight}
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            // src='../images/img-7.jpg'
                            src={ImageOne}
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        
                    </div>
                    <div className='cards__items'>
                        <CardItem 
                            // src='images/img-2.jpg'
                            src={ImageTwo}
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            // src='images/img-2.jpg'
                            src={ImageThree}
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            // src='../images/img-2.jpg'
                            src={ImageFour}
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;