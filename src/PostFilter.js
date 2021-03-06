import React from 'react';
import { Filter, ReferenceInput, SelectInput, TextInput, List } from 'react-admin';

export const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
		<ReferenceInput label="User" source="userId" reference="users" allowEmpty>
			<SelectInput optionText="name" />
		</ReferenceInput>
	</Filter>
);
