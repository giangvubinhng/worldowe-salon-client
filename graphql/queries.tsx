import { gql } from '@apollo/client';

export const salons = gql`
	query salons {
		salons {
			shop_name
			street
			city
			state
			country
			zip
			phone
		}
	}
`;
