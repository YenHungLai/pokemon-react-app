import { gql } from '@apollo/client';

export const POKEMONS = gql`
	query GetPokemons {
		pokemons {
			id
			name
			sprites {
				front_default
				back_default
			}
			types
		}
	}
`;

export const GET_USER = gql`
	query GetUser($ref: String!) {
		user(ref: $ref) {
			bag {
				pokeball
				superball
				ultraball
			}
			captured
		}
	}
`;

export const REGISTER_USER = gql`
	mutation RegisterUser($username: String!, $password: String!, $confirmPassword: String!) {
		registerUser(username: $username, password: $password, confirmPassword: $confirmPassword) {
			username
			createdAt
		}
	}
`;

export const LOGIN_USER = gql`
	mutation LoginUser($username: String!, $password: String!) {
		loginUser(username: $username, password: $password) {
			username
			token
			bag {
				pokeball
				superball
				ultraball
			}
			captured
			createdAt
			reference
		}
	}
`;
