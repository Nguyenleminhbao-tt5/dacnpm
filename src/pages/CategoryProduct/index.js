import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CategoryProduct.css'
function CategoryProduct() {
  return (

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-xl-3 l-navbar active-nav" id="sidebarMenu" >
          <nav class=" px-sm-2 px-0 bg-white">
            <div class="position-sticky textFont">
              <div class="list-group list-group-flush mx-4 mt-4">
                <h3>Danh mục sản phẩm</h3>
                <a
                  href="#"
                  class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab"
                  aria-current="true">
                  <span>Sneaker</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action py-2 ripple active" data-toggle="list" role="tab">
                  <span>MLB</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
                  <span>Hunter</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
                  <span>Bitis</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
                  <span>Nike</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action py-2 ripple" data-toggle="list" role="tab">
                  <span>Adidas</span></a>
                <div class="border-bottom">
                  <br></br>
                  {/* <h3>Giá</h3> */}
                  <h6>Chọn khoảng giá</h6>
                  <div class='row'>
                    <div class="col-6">
                      <label for="exampleInput1">Từ</label>
                      <input type="number" class="form-control" id="exampleInput1"></input>
                    </div>
                    <div class="col-6">
                      <label for="exampleInput2">Đến</label>
                      <input type="number" class="form-control" id="exampleInput2"></input>
                    </div>
                  </div>
                  <button type="button" class="btn btn-success my-2">Áp dụng</button>
                </div>
                <h3>Màu sắc</h3>
                <div class="btn-group row row-sm border-bottom" role="group" aria-label="Basic radio toggle button group">
                  <div class="col-auto col-sm-6">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                    <label class="btn btn-outline-secondary" for="btnradio1" style={{ width: '70px' }}>Đen</label>
                  </div>
                  <div class="col-auto col-sm-6">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                    <label class="btn btn-outline-secondary" for="btnradio2" style={{ width: '70px' }}>Trắng</label>
                  </div>
                  <div class="col-auto col-sm-6">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                    <label class="btn btn-outline-secondary" for="btnradio3" style={{ width: '70px' }}>Vàng </label>
                  </div>
                  <div class="col-auto col-sm-6">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                    <label class="btn btn-outline-secondary" for="btnradio4" style={{ width: '70px' }}>Xanh</label>
                  </div>
                </div>
              </div>
            </div>
          </nav>

        </div>

        <div class=" col-sm-8 col-md-9 col-xl-9">
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/m/a/maje_mfach00437-o001_h_6.jpg" />
                <Card.Body>
                  <Card.Title>Giày da thể thao hai màu</Card.Title>
                  <Card.Text>
                    6,825,000 đ                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/m/a/maje_mfach00408-0505_h_1_1.jpg" />
                <Card.Body>
                  <Card.Title>Giày thể thao với đế dày</Card.Title>
                  <Card.Text>
                    8,225,000 đ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/M/a/Maje_MFACH00432-0500_H_2_4.jpg" />
                <Card.Body>
                  <Card.Title>Giày thể thao da lộn glitter</Card.Title>
                  <Card.Text>
                    6,825,000 đ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/M/a/Maje_MFACH00522-G014_H_1_1.jpg" />
                <Card.Body>
                  <Card.Title>Giày cao gót da</Card.Title>
                  <Card.Text>
                    11,725,000 đ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/m/a/maje_mfach00437-o001_h_6.jpg" />
                <Card.Body>
                  <Card.Title>Giày da thể thao hai màu</Card.Title>
                  <Card.Text>
                    6,825,000 đ                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/m/a/maje_mfach00408-0505_h_1_1.jpg" />
                <Card.Body>
                  <Card.Title>Giày thể thao với đế dày</Card.Title>
                  <Card.Text>
                    8,225,000 đ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/M/a/Maje_MFACH00432-0500_H_2_4.jpg" />
                <Card.Body>
                  <Card.Title>Giày thể thao da lộn glitter</Card.Title>
                  <Card.Text>
                    6,825,000 đ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://maje.com.vn/media/catalog/product/cache/540ec56027640dda4501ceb3fc03bb79/M/a/Maje_MFACH00522-G014_H_1_1.jpg" />
                <Card.Body>
                  <Card.Title>Giày cao gót da</Card.Title>
                  <Card.Text>
                    11,725,000 đ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <section class="padding-bottom-sm  px-sm-2 px-0">
            <header class="section-heading heading-line">
              <h4 class="title-section text-uppercase"></h4>
            </header>

            <div class="row row-sm">
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid col d-flex justify-content-center">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div>
                  </figcaption>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                <div class="card card-sm card-product-grid col d-flex justify-content-center">
                  <a href="#" class="img-wrap"> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3d/fc/c9/d01fdd8ad2b3832703d53bcabf5adadf.jpg" width="400" height="400" /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div>
                  </figcaption>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  )

}



export default CategoryProduct