import type {AppProps} from 'next/app';
import React, {useEffect, FC} from 'react';
import {ApolloProvider} from '@apollo/client';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import PreFetch from '@/components/PreFetch';
import {wrapper} from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import {fetchCurrentUserAsync} from "@/features/userSlice";
import {useApollo} from '@/Apollo/client';

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
	const client = useApollo(pageProps);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (document !== undefined) {
			require('bootstrap/dist/js/bootstrap');
		} else {
			null;
		}
		dispatch(fetchCurrentUserAsync());
	}, []);
	return (
		<ApolloProvider client={client}>
			<PreFetch>
				<Component {...pageProps} />
			</PreFetch>
		</ApolloProvider>
	);
};

export default wrapper.withRedux(MyApp);
