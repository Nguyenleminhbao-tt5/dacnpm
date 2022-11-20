import './adMngproduct.css';

function DSproduct(){
    return(
        <div className='confirm'>
            <div className='frameconfirm'>
                <span className='dsnamepro'></span>
                <span className='dspricepro'></span>
                <span className='dsvolumepro'></span>
                <button className='editbutton'>Sửa</button>
                <button className='deletebutton'>Xóa</button>
            </div>
        </div>
    )
}
function AdMngproduct(){

    return(
        <div>
            <div className='addproduct'>
                <div className='title'>
                    <h1>Thêm sản phẩm</h1>
                </div>
                
                <div className='nameproduct'>
                    <h2>Tên sản phẩm :</h2>
                    <input className='innamepro'></input>
                </div>
                <div className='priceandvolume'>
                    <div className='pricepro'>
                        <h2>Giá :</h2>
                        <input className='inpricepro'></input>
                    </div>
                    <div className='volumepro'>
                        <h2>Số lượng :</h2>
                        <input className='involumepro'></input>
                    </div>
                </div>
                <div className='description'>
                        <h2>Mô tả :</h2>
                        <textarea className='textdes'></textarea>
                </div>
                <div className='divbutton'>
                    <button className='buttonadd'>Thêm</button>
                    <button className='buttonreset'>Reset</button>
                </div>
                
            </div>
            <div className='Danhmucproduct'>
                <div className='h1dmsanpham'>
                    <h1>Danh mục sản phẩm</h1>
                </div>
                <div className='headerdm'>
                    <div><h2>Tên sản phẩm</h2></div>
                    <div><h2>Giá</h2></div>
                    <div><h2>Số lượng</h2></div>
                </div>
                <DSproduct></DSproduct>
                <DSproduct></DSproduct>
                <DSproduct></DSproduct>
                <DSproduct></DSproduct>
            </div>
        </div>
    )
}
export default AdMngproduct;