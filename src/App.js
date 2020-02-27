import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import { UserList } from './UserList';
import { PostList } from './PostList';
import { PostEdit } from './PostEdit';
import { PostCreate } from './PostCreate';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource
				name="posts"
				list={PostList}
				edit={PostEdit}
				create={PostCreate}
			/>
			<Resource name="users" list={UserList} />
		</Admin>
	)
};

export default App;
