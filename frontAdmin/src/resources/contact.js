//-----LIBRARIES AND TOOLS--------------
import * as React from "react";
import {
     List,
     Datagrid,
     TextField,
     EmailField,     
     SimpleShowLayout,     
     Edit,     
     EditButton,
     TopToolbar,
     ListButton,
     DeleteButton,
     
     
     
     
} from 'react-admin';

//-------Styling and Icons-----------
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Markunread from '@material-ui/icons/Markunread';

//Buton que aparece al seleccionar item. Se ubica en bulkactions.
import {BulkDeleteWithConfirmButton} from 'react-admin'

//TextField custom para mostrar mensaje en una box multilinea
import CustomTextField from '../Fields/CustomTextField'


//----------Contact List--------------------------------------
export const ContactList = props => (
    <List {...props} pagination={false} bulkActionButtons={<BulkDeleteWithConfirmButton {...props}/>} title='Consultas' >
        <Datagrid rowClick="edit">
            <TextField source="id" sortable={false}/>
            <TextField source="name" sortable={false} label="Nombre"/>
            <EmailField source="email" sortable={false} label="Email"/>            
            <TextField source="destination" sortable={false} label="Destino"/>            
            <EditButton label= {''} icon={<Markunread/>} />
            <DeleteButton undoable={false} label={''}/>
        </Datagrid>
    </List>
);


//-----------------------VIEW CONTACT-------------------------
//Boton para ir atras.
const ContactEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} label="Ir Atrás" icon={<ChevronLeft />} />                
    </TopToolbar>
);

export const ContactShow = (props) => (
    <Edit {...props} actions={<ContactEditActions/>}>
        <SimpleShowLayout>
            <TextField source="name" label="Nombre" />
            <TextField source="email" label="Email"/>
            <TextField source="destination" label="Destino"/>  
            <CustomTextField source="msg"/>                                    
        </SimpleShowLayout>
        
    </Edit>
);