//-----LIBRARIES AND TOOLS--------------
import * as React from "react";
import {
     List,
     Datagrid,
     TextField,
     ImageField,
     Edit,
     SimpleForm,
     TextInput,
     ImageInput,
     Pagination,
     DeleteButton,
     Toolbar,
     SaveButton
     
} from 'react-admin';

import { TopToolbar, ListButton} from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

//-----------------NewsletterList-----------------------------------------

export const NewsletterList = props => (
    <List {...props} pagination={false} bulkActionButtons={false} title='Newsletter'>
        <Datagrid rowClick="edit">
            <TextField source="id" sortable={false} />
            <TextField source="title" sortable={false} label='Título'/>
            <TextField source="description" sortable={false} label='Descripción'/>
            <ImageField label="Image" source="imageid" sortable={false} label='Imagen'/>
        </Datagrid>
    </List>
);




//-----------------NewsletterEdit-----------------------------------------

const NewsletterEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} label="Ir Atrás" icon={<ChevronLeft />} />                
    </TopToolbar>
);

//Custom Toolbar para que solo aparezca grabar. De querer tener eliminar y grabar. Borrar este componente y sacarlo del Simpleform.
const NewsletterEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />        
    </Toolbar>
);


export const NewsletterEdit = props => (
    <Edit {...props} actions={<NewsletterEditActions />} undoable={false}>
        <SimpleForm toolbar={<NewsletterEditToolbar/>}>
            <TextInput source="title" label='Título' multiline={true}/>
            <TextInput source="description" label='Descripción' multiline={true}/>
            <ImageInput source="pictures" label="Imagen" accept="image/*" placeholder={<p>Arrojar Imagen aquí   (.jpg)</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>            
        </SimpleForm>
    </Edit>
);