import './adconfirm.css';

function ConfirmOrder(){
    return(
        <div className='confirm'>
            <div className='frameconfirm'>
                <span className='namecus'></span>
                <span className='address'></span>
                <span className='codeorder'></span>
                <span className='priceorder'></span>
                <button className='confirmbutton'>Xác nhận</button>
                <button className='cancelbutton'>Hủy</button>
            </div>
        </div>
    )
}   
function Adconfirm(){

    return(
        <div>
            <div className='header'>
            </div>
            <div className='ContentRevenue'>
                <div className='h1dsxacnhan'>
                    <h1>Danh sách xác nhận</h1>
                </div>
                <div className='headerconfirm'>
                    <div><h2>Tên khách hàng</h2></div>
                    <div><h2>Địa chỉ</h2></div>
                    <div><h2>Mã đơn hàng</h2></div>
                    <div><h2>Giá đơn hàng</h2></div>
                    
                </div>
                
                <ConfirmOrder></ConfirmOrder>
                <ConfirmOrder></ConfirmOrder>
                <ConfirmOrder></ConfirmOrder>
                <ConfirmOrder></ConfirmOrder>
                <ConfirmOrder></ConfirmOrder>
                <ConfirmOrder></ConfirmOrder>
                <ConfirmOrder></ConfirmOrder>
            </div>
        </div>
    )
}
export default Adconfirm;