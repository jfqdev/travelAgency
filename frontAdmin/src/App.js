//---LIBRERIAS AND TOOLS----------
import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  List,
  fetchUtils,
} from "react-admin";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

//-----DATA & AUTH PROVIDERS--------
import myDataProvider from "./config/myDataProvider";
import authProvider from "./config/authProvider";

//---Traducción
import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "./config/spanishDictionary"; //Es en español enrealidad, recauchite el nodemodule. Carpeta esm.

//----RESOURCES-----(RUTAS)
import Dashboard from "./resources/Dashboard";
import { PackageList, PackageEdit, PackageCreate } from "./resources/package";
import { SubscriberList } from "./resources/subscribers";
import { NewsletterList, NewsletterEdit } from "./resources/newsletter";
import { SliderList, SliderEdit } from "./resources/slider";
import { ContactList, ContactShow } from "./resources/contact";

//----ICONS-----
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const messages = {
  en: { ...englishMessages },
};
const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);

const App = () => (
  <>
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={myDataProvider}
      locale="en"
      i18nProvider={i18nProvider}
    >
      <Resource
        name="packages"
        list={PackageList}
        edit={PackageEdit}
        create={PackageCreate}
        options={{ label: "Paquetes" }}
      />
      <Resource
        name="newsletter"
        list={NewsletterList}
        edit={NewsletterEdit}
        options={{ label: "Newsletter" }}
        icon={MenuBookIcon}
      />
      <Resource
        name="slider"
        list={SliderList}
        edit={SliderEdit}
        icon={CropOriginalIcon}
      />
      <Resource
        name="subscribers"
        list={SubscriberList}
        options={{ label: "Suscriptores" }}
        icon={PeopleOutlineIcon}
      />
      <Resource
        name="contact"
        list={ContactList}
        edit={ContactShow}
        options={{ label: "Consultas" }}
        icon={MailOutlineIcon}
      />
    </Admin>
  </>
);

export default App;

//Old crap
//import { UserList } from './users';
//import { PostList, PostEdit, PostCreate } from './posts';
//<Resource name="users" list={UserList} icon={UserIcon} />
//<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); Pruebas en jsonplaceholder
//const myDataProvider = jsonServerProvider('http://localhost:3001')
