import React from 'react';
import { useQuery } from '@apollo/client';
import { salons } from '../graphql/queries';
import { NextPage } from 'next';
import Card from '../components/Card';
import { IShopBody } from '../interfaces/IShop';

interface props {
	clicked: boolean;
}
const Shops: NextPage<props> = ({ clicked }) => {
	const { loading, error, data } = useQuery(salons, { skip: !clicked });
	// if (results.loading) console.log(results.loading);
	// if (results.error) console.log(results.error);
	// if (results.data) console.log(results.data);
	return (
		<div>
			{data
				? data.salons.map((shop: IShopBody, ind: number) => (
						<Card shop={shop} key={ind} />
				  ))
				: null}
		</div>
	);
};

export default Shops;
