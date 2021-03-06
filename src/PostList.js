import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import { PostFilter } from './PostFilter';

export const PostList = props => (
	<List filters={<PostFilter />} {...props}>
		<Datagrid>
			<ReferenceField source="userId" reference="users">
				<TextField source="name" />
			</ReferenceField>
			<TextField source="id" />
			<TextField source="title" />
			<EditButton />
		</Datagrid>
	</List>
);
