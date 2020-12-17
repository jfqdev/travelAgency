//-----LIBRARIES AND TOOLS--------------
import * as React from "react";
import {Fragment} from 'react'
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
     SimpleList,
     BooleanField,
     BooleanInput,
     ImageInput,
     ImageField,
     NumberField,
     NumberInput,
     Pagination,
     BulkActionsToolbar,
     
     
} from 'react-admin';
import { TopToolbar, ListButton, ShowButton } from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

//Buton que aparece al seleccionar item. Se ubica en bulkactions.
import {BulkDeleteButton} from 'react-admin'

//Validators
import {
    validateDestination,
    validatePrice,
    validateCuotas,
    validateDescription,
    validateImage,
    validateEditDestination,
    validateEditPrice,
    validateEditCuotas
} from '../helpers/inputValidator'



//-----------------PackageList-----------------------------------------

export const PackageList = props => (
    <List {...props} pagination={false} bulkActionButtons={<BulkDeleteButton undoable={false} {...props}/>} title='Paquetes'>
        <Datagrid rowClick="edit">
            <TextField source="id" sortable={false} />            
            <TextField source="destination" sortable={false} label='Destino'/>
            <TextField source="price" sortable={false} label='Precio'/>
            <NumberField source="cuotas" sortable={false} label='Cuotas'/>
            <TextField source="description" sortable={false} label='Descripción' />
            <BooleanField source="highlight" sortable={false} label='Destacar' />
            <ImageField source="imageid" sortable={false} label='Imagen' />
        </Datagrid>
    </List>
);


//--------------PackageEdit--------------------------------------------
const PackageEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} label="Ir Atrás" icon={<ChevronLeft />} />        
    </TopToolbar>
);



export const PackageEdit = props => (
    <Edit undoable={false} actions={<PackageEditActions/>} {...props}>
        <SimpleForm>            
            <TextInput source="destination" validate={validateEditDestination} label='Destino'/>
            <TextInput source="price" validate={validateEditPrice} label='Precio' />
            <NumberInput source="cuotas" validate= {validateEditCuotas} label='Cuotas'/>
            <TextInput source="description" label='Descripción'/>
            <BooleanInput source="highlight" label='Destacar'/>
            <ImageInput source="pictures" label="Imagen" accept="image/*" placeholder={<p>Arrojar Imagen aquí   (.jpg)</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);


//-----------PackageCreate------------------------------------------------
const PackageCreateActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} label="Ir Atrás" icon={<ChevronLeft />} />        
    </TopToolbar>
);


export const PackageCreate = props => (
    <Create actions={<PackageCreateActions/>} {...props}>
        <SimpleForm>
            <TextInput source="destination" validate={validateDestination} label='Destino' />
            <TextInput source="price" validate= {validatePrice} label='Precio'/>
            <NumberInput source="cuotas" validate= {validateCuotas} label='Cuotas' />
            <TextInput source="description" validate={validateDescription}  label='Descripción'/>
            <BooleanInput source="highlight" defaultValue={false} label='Destacar'/>
            <ImageInput source="pictures" label="Imagen" accept=".jpg" placeholder={<p>Arrojar Imagen aquí   (.jpg)</p>} validate = {validateImage}>
                <ImageField source="src" title="title"/>
            </ImageInput>
        </SimpleForm>
    </Create>
);












