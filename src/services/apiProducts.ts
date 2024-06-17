import axios from 'axios';

export const apiContacts = axios.create({
	baseURL:'https://dummyjson.com/products/category/'
});
