import './adrevenue.css';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterSquare} from'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';



function AdRevenue(){

    return(
        <div>
            <div className='header'>
                
            </div>
            <div className='ContentRevenue'>
                <div className='overview'>
                    <h1><u>Tổng quan</u></h1>
                    <div className='fortime'>
                        <div className='formonth'>
                            <input type='month' className="inputmonth" ></input>
                            <h1>50.000.000 VND</h1>
                        </div>
                        <div className='forYear'>
                            <input type="number" className="inputyear" min="1950" max="2100" value="2000"></input>
                            <h1>50.000.000 VND</h1>
                        </div>
                    </div>
                    
                </div>
                <div className='chart'>
                        <h1><u>Biểu đồ</u></h1>
                        <div className='chartformonth'>
                            <input type='month' className="inputmonth" ></input>
                            <div className='chart1'>

                            </div>
                        </div>
                        <div className='chartforyear'>
                            <input type="number" className="inputyear" min="1950" max="2100" ></input>
                            <div className='chart2'></div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default AdRevenue;