let initialState = {
	productList: [],
	productDetail: {},
};
function productReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'GET_PRODUCT_SUCCESS':
			console.log(
				'GET_PRODUCT_SUCCESS! productReducer type: ',
				type,
				' payload: ',
				payload
			);
			return { ...state, productList: payload.data ? payload.data : [] };
		case 'GET_PRODUCT_FAILED':
			console.log('no data found! productReducer type: ');
			return { ...state, productList: [] };
		case 'GET_PRODUCT_DETAIL':
			console.log(
				'GET_PRODUCT_DETAIL! productReducer type: ',
				type,
				' payload: ',
				payload
			);
			return { ...state, productDetail: payload.data ? payload.data : [] };

		default:
			return { ...state };
	}
}
export default productReducer;
