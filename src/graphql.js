import { gql } from '@apollo/client';

export const POKEMONS = gql`
	{
		pokemons {
			id
			name
			sprites {
				front_default
				back_default
			}
			types {
				name
			}
		}
	}
`;
