import { gql } from '@apollo/client';

export const shops = gql`
	query shops {
		shops {
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
