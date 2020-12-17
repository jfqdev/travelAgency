//-----LIBRERIAS AND TOOLS------
import * as React from "react";
import {
     List,
     Datagrid,
     TextField,
     EmailField
     
} from 'react-admin';

//Buton que aparece al seleccionar item. Se ubica en bulkactions.
import {BulkDeleteButton} from 'react-admin'




//---------Subscriber List-----------------


export const SubscriberList = props => (
    <List {...props} pagination={false} bulkActionButtons={<BulkDeleteButton undoable={false} {...props}/>} title='Suscriptores' >
        <Datagrid rowClick="edit">
            <TextField source="id" sortable={false}/>
            <EmailField source="email" sortable={false}/>
        </Datagrid>
    </List>
);