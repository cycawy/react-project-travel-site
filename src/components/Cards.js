import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>Check out these EPIC destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem 
                            src="../images/img-8.jpg"
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='../images/img-7.jpg'
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        
                    </div>
                    <div className='cards__items'>
                        <CardItem 
                            src='../images/img-2.jpg'
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='../images/img-2.jpg'
                            text='Explore this hidden waterfall in the amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='../images/img-2.jpg'
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