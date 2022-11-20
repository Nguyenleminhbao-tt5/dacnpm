import {RiSubtractFill} from 'react-icons/ri'
import {GoPlus} from 'react-icons/go'
import {BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';

import { useState } from 'react';
import './cart.css';

function Ttgiasp(props){
    const [quantity, setQuantity] = useState(1);
     const decrease = () => {
        if(quantity >1){
            setQuantity(prev => prev -1);
        }
        else quantity=1;
        props.soluong=quantity;
         
     }
     const increase = () => {
        setQuantity(prev => prev +1);
        props.soluong=quantity;
    }
    return(
        <div className="ttgiasp">
            <img src={props.image} alt={props.titleimage} />
            <div className="thongtin">
                <h2>Name{props.nameSP}</h2>
                <p>Đơn giá: {props.dongiaSP} VND</p>
                <p>Size: {props.sizeSP}</p>
            </div>
            <div className="giasl">
                <div className='tanggiam'>
                    <RiSubtractFill className='icon-sub' onClick={decrease}></RiSubtractFill>
                    <h3 className='soluong'> {quantity}</h3>
                    <GoPlus className='icon-plus' onClick={increase}></GoPlus>
                    <BsFillTrashFill className='icon-trash' ></BsFillTrashFill>
                </div>
                <div className='giaall'>
                    <h3>Tổng: {props.dongiaSP*quantity} VND</h3>
                </div>
                
            </div>
        </div>
    )
}
function Giohang(){

          
    return(
        <div className='cart'>
            <h1>Giỏ hàng</h1>
            <div className="giohang">
                <div className="DSsp">
                    <Ttgiasp nameSP="Bitis" dongiaSP='300000' soluong='2' sizeSP='40' image="https://bucket.nhanh.vn/store3/92233/ps/20221026/CHN0303__8_.jpg"></Ttgiasp>
                    <Ttgiasp nameSP="Bitis" dongiaSP='300000' soluong='2' sizeSP='40' image="https://bucket.nhanh.vn/store3/92233/ps/20220707/SND0010__1__thumb.jpg"></Ttgiasp>               
                    <Ttgiasp nameSP="Bitis" dongiaSP='300000' soluong='2' sizeSP='40' image="https://bucket.nhanh.vn/store3/92233/bn/custom_3.jpeg"></Ttgiasp>
            </div>
                <div className="XNdonhang">
                    <div className="Xacnhan">
                        <div className="thongtinchot">
                            <div className="titlegia">
                                <h3>Số lượng</h3>
                                <h3>Tạm tính</h3>
                                <h3>Giảm giá</h3>
                                <h3>Phí vận chuyển</h3>
                            </div>
                            <div className="contentgia">
                                <h3>3 sản phẩm</h3>
                                <h3>30.000đ</h3>
                                <h3>30.000đ</h3>
                                <h3>30.000đ</h3>
                            </div>
                        </div>
                        <div className="chotgia">
                            <div className="titlegia">
                                <h3>Tổng tiền</h3>
                            </div>
                            <div className="contentgia">
                                <h3>45.000</h3>
                            </div>
                        </div>
                        
                    </div>
                    <Link to='./Pay' className="buttonXN">Xác nhận đơn hàng</Link>
                </div>
                
            </div>
        </div>
    )
}
export default Giohang;
