import './chitietsp.css';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterSquare} from'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'



function Sanphamtt(){
    return(
        <div className='Khungsp'>
            <img src='https://bucket.nhanh.vn/store3/92233/ps/20220707/SND0010__1__thumb.jpg' alt=''></img>
            <h3>Nike</h3>
            <AiOutlineStar className='stars'></AiOutlineStar>
            <AiOutlineStar className='stars'></AiOutlineStar>
            <AiOutlineStar className='stars'></AiOutlineStar>
            <AiOutlineStar className='stars'></AiOutlineStar>
            <AiOutlineStar className='stars'></AiOutlineStar>
            <h3 className='pricesptt'>12.000.000đ</h3>
        </div>
    )
}

function Chitietsp(){

    return(
        
        <div className="Trangchitiet">
            <div className="thongtinchitietsp">
                <div className="anhminhhoa">
                    <img src="https://bucket.nhanh.vn/store3/92233/ps/20220707/SND0010__1__thumb.jpg" alt=""/>
                    <MdOutlineArrowBackIosNew className='muitentrai'></MdOutlineArrowBackIosNew>
                    <MdOutlineArrowForwardIos className='muitenphai'></MdOutlineArrowForwardIos>
                    <h2 className='share'>Chia sẻ: </h2>
                    <BsFacebook className='iconfb'></BsFacebook>
                    <AiFillTwitterSquare className='icontwitter'></AiFillTwitterSquare>
                    <AiFillInstagram className='iconig'></AiFillInstagram>
                    <h2 className='like'>Thích</h2>
                    <FaRegHeart className='icontym'></FaRegHeart>
                    
                </div>
                <div className="thongtin">
                    <h1>Jordan</h1>
                    <p>Hãng: Nike</p>
                    <h2>Kích thước</h2>
                    <span className='sizegiay'>37</span>
                    <span className='sizegiay'>38</span>
                    <span className='sizegiay'>39</span>
                    <span className='sizegiay'>40</span>
                    <span className='sizegiay'>41</span>
                    <span className='sizegiay'>42</span>
                    <h2>Màu sắc</h2>
                    <span className='mausacgiay'>Trắng</span>
                    <span className='mausacgiay'>Đen</span>
                    <span className='mausacgiay'>Đỏ</span>
                    <span className='mausacgiay'>Xanh</span>
                    <h1 className='giatien'>150000000</h1>
                    <p>Ưu đãi khuyến mãi</p>
                    <button>
                        <Link to='../../Cart' className='cart1'> <b>Thêm vào giỏ hàng</b></Link>
                    </button>
                </div>
            </div>
            <div className="SPtuongtu">
                <h1>Sản phẩm tương tự</h1>
                <div className='DSSPtt'>
                    <Sanphamtt></Sanphamtt>
                    <Sanphamtt></Sanphamtt>
                    <Sanphamtt></Sanphamtt>
                    <Sanphamtt></Sanphamtt>
                    <Sanphamtt></Sanphamtt>
                </div>
                
            </div>
            <div className="Motasp">
                <h1>Mô tả sản phẩm</h1>
                <p>Thuộc dòng sản phẩm sneaker mới nhất 2022 của Shondo, Chunky S1 được thiết kế theo phong cách hầm hố, đường nét phá cách cùng logo SH nổi bật, dễ dàng phối đồ và thể hiện đa phong cách.
                </p>
                <p>- Dòng sản phẩm: Chunky S1
                </p>
                <p>- Thương hiệu: SHONDO
                </p>
                <p>- Đế trên chất liệu Phylon cao cấp, kết hợp đế dưới cao su có rãnh, hạn chế trơn trượt, chống mài mòn </p>
            </div>
            <div className="Danhgia">
                <div className='vote'>
                    <h2>5 sao</h2>
                    <AiOutlineStar className='stars'></AiOutlineStar>
                    <AiOutlineStar className='stars'></AiOutlineStar>
                    <AiOutlineStar className='stars'></AiOutlineStar>
                    <AiOutlineStar className='stars'></AiOutlineStar>
                    <AiOutlineStar className='stars'></AiOutlineStar>
                    <h2>1 nhận xét</h2>
                </div>
                <div className='loc'>
                    <h2>Lọc xem theo:</h2>
                    <button>Mới nhất</button>
                    <button>Có hình ảnh</button>
                    <button>Đã mua hàng</button>
                </div>
                <div className='uservote'>
                    <h3>Hà Việt Đức</h3>
                    <p>Đã đánh giá 5 <AiOutlineStar className='stars'></AiOutlineStar> </p>
                </div>
                <div className='nhanxet'>
                    <p>Giày đẹp!</p>
                </div>
            </div>
        </div>
    )
}
export default Chitietsp;
