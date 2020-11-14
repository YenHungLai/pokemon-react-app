import { useState, useRef } from 'react';

const useForm = (init = {}) => {
	const [data, setData] = useState(init);

	const onInput = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	return [data, onInput];
};

export default useForm;
