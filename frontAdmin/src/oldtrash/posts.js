// in src/posts.js
import * as React from "react";
import {
     List,
     Datagrid,
     TextField,
     ReferenceField,
     EditButton,
     Edit,
     SimpleForm,
     TextInput,
     ReferenceInput,
     SelectInput,
     Create,
     Filter,
     SimpleList
     
} from 'react-admin';
import { TopToolbar, ListButton, ShowButton } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

//--------------------PostList----------------------------------

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

//Adaptacion mobile/deskop con un ternario en funcion de mediaquery. Simplelist es un Datagrid optimizado para mobile.
export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<PostFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="id" />
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

/* export const PostList = props => (
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
); */
//

//--------------------PostEdit-----------------------------------

const PostTitle = ({ record }) => {
        return <span>{record ? `"${record.title}"` : ''}</span>;
    };

const PostEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);


export const PostEdit = props => (
    <Edit title={<PostTitle />} actions={<PostEditActions />} {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

//-----------------------PostCreate----------------------------------
const PostCreateActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);


export const PostCreate = props => (
    <>    
    <Create actions={<PostCreateActions />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>        
    </Create>
    </>
);
