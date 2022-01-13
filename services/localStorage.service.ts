function ParseJsonSafe(jsonStr: any) {
	if ('string' === typeof jsonStr) {
		return JSON.parse(jsonStr);
	}
	return jsonStr;
}

export const getItem = (key: string) => {
	const itemStr = window.localStorage.getItem(key);
	return ParseJsonSafe(itemStr);
};

export const setItem = (key: string, value: any) => {
	const valueStr = JSON.stringify(value);
	window.localStorage.setItem(key, valueStr);
};

export const removeItem = (key: string) => {
	window.localStorage.removeItem(key);
};
