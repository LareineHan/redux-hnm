import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/ProductDetail.css';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
	const dispatch = useDispatch();
	const productDetail = useSelector((state) => state.product.productDetail);
	let { id } = useParams();
	let productImg = productDetail.img;
	let productTitle = productDetail.title;
	let productPrice = productDetail.price;
	let isNew = productDetail.new;
	let isChoice = productDetail.choice;
	let sizeOptions = productDetail.size;
	const getProductDetail = async () => {
		dispatch(productAction.getProductDetail(id));
		console.log(productDetail);
	};
	useEffect(() => {
		getProductDetail();
	}, []);

	return (
		<div>
			<Container className='detail-product-container'>
				<div className='detail-product-img'>
					<img src={productImg} alt='product' />
				</div>
				<div className='detail-description-area'>
					<h2 className='detail-product-title'>{productTitle}</h2>
					<div className='detail-product-price'>{productPrice} KRW</div>
					<div className='detail-is-new'>
						{isNew === true ? 'New Arrival' : ''}
					</div>
					<div className='detail-is-choice'>
						{isChoice === true ? 'Conscious choice' : ''}
					</div>
					<select name='detail-size' id='size'>
						<option value=''>Select Size</option>
						{sizeOptions?.map((size) => (
							<option value={size}>{size}</option> // sizeOptions가 있을 때만 실행
							// 여기에 default SELECT라는 option 맨 위에 추가하기. -> 어떻게?
						))}
					</select>
				</div>
			</Container>
		</div>
	);
};
export default ProductDetail;
