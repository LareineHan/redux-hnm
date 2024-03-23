function getProducts(searchQuery) {
	return async (dispatch, getState) => {
		// 여기에서 디스패치로 전달받는다.
		let url = `https://my-json-server.typicode.com/lareinehan/hnm-hw/products?q=${searchQuery}`;
		let res = await fetch(url);
		let data = await res.json();
		console.log('data ?? ', data);
		if (data.length === 0) {
			dispatch({ type: 'GET_PRODUCT_FAILED', payload: { data } });
		} else {
			dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
		}
		// 그리고 여기에서 디스패치로 전달한다.
		// setProductList(data);
	};
}

function getProductDetail(id) {
	return async (dispatch, getState) => {
		let url = `https://my-json-server.typicode.com/lareinehan/hnm-hw/products/${id}`;
		let res = await fetch(url);
		let data = await res.json();
		console.log('detail?? ', data);
		if (data) {
			dispatch({ type: 'GET_PRODUCT_DETAIL', payload: { data } });
		}
		// 그리고 여기에서 디스패치로 전달한다.
		// setProductList(data);
	};
}

export const productAction = { getProducts, getProductDetail };
