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

//-----------------SliderList-----------------------------------------

export const SliderList = props => (
    <List {...props} pagination={false} bulkActionButtons={false}>
        <Datagrid rowClick="edit" >
            <TextField source="id" sortable={false} />
            <TextField source="title" sortable={false} label='Título'/>
            <TextField source="description" sortable={false} label='Descripción'/>
            <ImageField label="Image" source="imageid" sortable={false} label='Imagen'/>
        </Datagrid>
    </List>
);




//-----------------SliderEdit-----------------------------------------
const SliderEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} label="Ir Atrás" icon={<ChevronLeft />} />        
    </TopToolbar>
);

//Custom Toolbar para que solo aparezca grabar. De querer tener eliminar y grabar. Borrar este componente y sacarlo del Simpleform.
const SliderEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />        
    </Toolbar>
);



export const SliderEdit = props => (
    <Edit {...props} actions={<SliderEditActions/>}>
        <SimpleForm toolbar={<SliderEditToolbar/>}>
            <TextInput source="title" label='Título'/>
            <TextInput source="description" multiline={true}/>
            <ImageInput source="pictures" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>            
        </SimpleForm>
    </Edit>
);

