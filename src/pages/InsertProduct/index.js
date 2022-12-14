import './AddItem.css'
import React, {Component} from 'react'
import {Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';

const image_const = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU"
class InsertProduct extends Component{
	constructor(props) {
		super(props);
		this.index=""
		this.url=""
		this.state = {
		  validated: false,
		  textName: "",
		  textType: "",
		  textbranch: "",
		  textColor: "",
		  txtDisplaySize:"", 
		  txtPrice: "",
		  image: "https://banner2.cleanpng.com/20171217/d11/shopping-cart-png-5a364b5904a3f4.917214941513507673019.jpg",
		  image1: "https://banner2.cleanpng.com/20171217/d11/shopping-cart-png-5a364b5904a3f4.917214941513507673019.jpg",
		  image2: "https://banner2.cleanpng.com/20171217/d11/shopping-cart-png-5a364b5904a3f4.917214941513507673019.jpg",
		  image3: "https://banner2.cleanpng.com/20171217/d11/shopping-cart-png-5a364b5904a3f4.917214941513507673019.jpg",
		  image4: "https://banner2.cleanpng.com/20171217/d11/shopping-cart-png-5a364b5904a3f4.917214941513507673019.jpg"
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
		  
		handleSubmit =(event)=> {
		      const form = event.currentTarget;
		      if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
		      }  
		      this.setState({validated: true});
			  if(this.state.textbranch&&this.state.textType&&this.state.textName&&this.state.textColor&&this.state.txtBattery&&this.state.txtPrice&&this.state.txtDisplaySize&&this.state.txtDisplaySize&&this.state.txtRom&&this.state.txtMemory&&this.state.txtInStock&&this.state.image!=image_const){
				let arrcolor = 	this.state.textColor.split(", ");
				let textColor =arrcolor[0];
				for(let i=1;i<arrcolor.length-1;i++){
					textColor = textColor + " + " + arrcolor[i];
				}
				textColor = textColor + " + " + arrcolor[arrcolor.length-1];
				let image = "";
				if (this.state.image!=image_const) image+=this.state.image
				if (this.state.image1!=image_const) image= image + " + " + this.state.image1
				if (this.state.image2!=image_const) image= image + " + " + this.state.image2
				if (this.state.image3!=image_const) image= image + " + " + this.state.image3
				if (this.state.image4!=image_const) image= image + " + " + this.state.image4
				console.log(textColor,image)
				const res = axios.post('http://localhost/Official/LT_WEB/server/api/product/create.php', {
		
						brand: this.state.textbranch,
						type: this.state.textType,
						product_name: this.state.textName,
						color: textColor,
						price: this.state.txtPrice,
						images: image
						}) 
						.then(function (response) {
							console.log(response.data=="success")
							if(response.data=="success"){
								toast.success('Th??m s???n ph???m th??nh c??ng :)', {
									position: "top-right",
									autoClose: 700,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
								});
								setTimeout(()=>{window.location.href = "/admin/product"},600)
							}
						})
						.catch(function (error) {
							console.log(error);
						});
					}
					else{
						toast.warning('Xin h??y nh???p ?????y ????? th??ng tin :)', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					}
		};

	    handleInputChange(event) {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			this.setState({
			[name]: value
			});
	     	 };

		On_click=(e)=>{
			const target = e.target;
			const name = target.name;
			this.index= name;
		  document.getElementById("openmodal").click()
	  	}
	render() {

	return(
		<div class='container-fluid' id='product-list'>
			<ToastContainer/>
		<div class ='row' style={{backgroundColor:"#EAEAEA"}}>
		<div class="col-md-8 col-sm-12" style={{margin:'auto'}} >
		<Form noValidate validated={this.state.validated} style={{marginTop:"120px"}}>
		<div class ='row' style={{marginTop:'5px'}}>
		<div class='titleADD'>
		<h2 class="text-center"><b>Th??ng tin s???n ph???m</b></h2>
		</div>
        <div class="col-md-7 col-sm-12">
				<Form.Group  controlId="validationCustom03" style={{margin:'0 0 2px'}}>
				<Form.Label><span>T??n s???n ph???m</span></Form.Label>
				<Form.Control type="text" placeholder="T??n s???n ph???m" style={{borderRadius:'9px'}} name="textName" value={this.state.textName} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label><span>Lo???i</span></Form.Label>
				<Form.Control type="text" placeholder="Nh???p lo???i s???n ph???m" style={{borderRadius:'9px'}} name="textType" value={this.state.textType} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label><span>Gi??</span></Form.Label>
				<Form.Control type="number" placeholder="Nh???p gi??" style={{borderRadius:'9px'}}  name="txtPrice" value={this.state.txtPrice} onChange={this.handleInputChange} required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label><span>M??u</span></Form.Label>
				<Form.Control type="text" placeholder="Nh???p m??u 1, m??u 2,.." style={{borderRadius:'9px'}}  name="textColor" value={this.state.textColor} onChange={this.handleInputChange} required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label><span>K??ch c???</span></Form.Label>
				<Form.Control type="text" placeholder="Nh???p k??ch c???" style={{borderRadius:'9px'}}  name="txtBattery" value={this.state.txtBattery} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label><span>Th??ng tin ??u ????i</span></Form.Label>
				<Form.Control type="number" placeholder="Nh???p chi ti???t ??u ????i" style={{borderRadius:'9px'}}  name="txtRom" value={this.state.txtRom} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label><span>M?? t??? chi ti???t</span></Form.Label>
				<Form.Control type="number" placeholder="Nh???p chi ti???t s???n ph???m" style={{borderRadius:'9px'}}  name="txtMemory" value={this.state.txtMemory} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label><span>C??c s???n ph???m li??n quan</span></Form.Label>
				<Form.Control type="text" placeholder="Nh???p c??c s???n ph???m li??n quan" style={{borderRadius:'9px'}} required name="txtDisplaySize" value={this.state.txtDisplaySize} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>
		
			</div>
			<div class="col-md-5 col-sm-12 " style={{marginTop:'30px'}}>
				<button type="button" data-bs-toggle="modal" data-bs-target="#myModal" id="openmodal" style={{display:'none'}}>Open modal</button>
				<div class ='row'>
				<div class="col-md-9 col-sm-9 col-9 mw-100" style={{margin:'auto'}}>
					<img class="img-fluid" src={this.state.image} name ="image" onClick={this.On_click}/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 col-11" style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image1} name ="image1" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image2} name ="image2" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 col-11" style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image3} name ="image3" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image4} name ="image4" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-end container mt-3">
		<div class = 'bottomADDChange'>
		<Button type="button" variant="success" onClick={this.handleSubmit}>Th??m s???n ph???m</Button>
		<button type="button" class="btn btn-success" id="exit"  onClick={()=>{window.location.href = "/admin/product"}}>H???y</button>
		</div>
		</div>
		</Form>
		{/* <!-- The Modal --> */}
		<div class="modal fade" id="myModal">
		<div class="modal-dialog">
			<div class="modal-content">

			{/* <!-- Modal Header --> */}
			<div class="modal-header">
				<h4 class="modal-title">Nh???p ???????ng d???n h??nh ???nh</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>

			{/* <!-- Modal body --> */}
			<div class="modal-body">
				<input type="text" class="form-control" placeholder="???????ng d???n h??nh ???nh" name="url" 
				// onChange={(e)=>{this.url= e.target.value}}
				onKeyUp={(even) => {
					if (even.key === "Enter") {
						even.preventDefault();
						document.getElementById('OKButton').click()
					}
					else this.url= even.target.value
				}}/>
			</div>

			{/* <!-- Modal footer --> */}
			<div class="modal-footer">
				{/* <button type="button" class="btn btn-primary" onClick={this.indexImage} data-bs-dismiss="modal">Ch???n file</button> */}
				<button type="button" class="btn btn-success" onClick={(e)=>{
					const indexImage =this.index;
						if(this.url!==''){
							this.setState({
								[indexImage]: this.url
							});
						}
					}} 
				data-bs-dismiss="modal" id='OKButton'>OK</button>
				<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
			</div>

			</div>
		</div>
		</div>
		</div>
		</div>
		{/* <Footer/> */}
		</div>
	);
	}
}

export default InsertProduct;