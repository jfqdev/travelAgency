import jsonServerProvider from 'ra-data-json-server';
import environment from './env'
import {fetchUtils} from 'react-admin';


console.log(environment)

if (environment.ENV === 'local'){
    var API_ENDPOINT = `http://${environment.HOST_ENV_LOCAL}:${environment.PORT_ENV_LOCAL}/api`
}else  if (environment.ENV  ===  'prod'){
    var API_ENDPOINT = `http://${environment.HOST_ENV_PROD}/api`
}





//Agregando Headers a todo HTTP request.
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { jwtToken } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', jwtToken);
    return fetchUtils.fetchJson(url, options);
};

console.log(API_ENDPOINT)
//const dataProvider = jsonServerProvider('http://'+HOST+":"+PORT);
const dataProvider = jsonServerProvider(API_ENDPOINT,httpClient);

const myDataProvider = {
    ...dataProvider,
    create: (resource, params) => {
        if ( (resource !== 'packages' && resource !== 'newsletter' && resource !== 'slider')  || !params.data.pictures) {
            // fallback to the default implementation            
            return dataProvider.create(resource, params);

        }


        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        
        // Freshly dropped pictures are File objects and must be converted to base64 strings

        
        console.log(params.data.pictures);
        const base64Promise = convertFileToBase64(params.data.pictures)   
        base64Promise.then(base64Image=>{

            dataProvider.create(resource,{
                ...params,
                data: {
                    ...params.data,
                    pictures: {
                        src: base64Image,
                        title: `${params.data.pictures.title}`,
                    }                   
                    
                }
            })            

        });


        return dataProvider.create(resource, params) //VA O NO VA???
        

/*         const newPictures = params.data.pictures.filter(
            p => p.rawFile instanceof File
        );
        
        const formerPictures = params.data.pictures.filter(
            p => !(p.rawFile instanceof File)
        );

        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map(picture64 => ({
                    src: picture64,
                    title: `${params.data.title}`,
                    
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.create(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        pictures: [
                            ...transformedNewPictures,
                            ...formerPictures,
                        ],
                    },
                })
            ); */
    },
    update: (resource, params) => {
        if ( (resource !== 'packages' && resource !== 'newsletter' && resource !== 'slider') || !params.data.pictures) {
            // fallback to the default implementation            
            return dataProvider.update(resource, params);

        }


        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        
        // Freshly dropped pictures are File objects and must be converted to base64 strings

        
        console.log(params.data.pictures);
        const base64Promise = convertFileToBase64(params.data.pictures)   
        base64Promise.then(base64Image=>{

            dataProvider.update(resource,{
                ...params,
                data: {
                    ...params.data,
                    pictures: {
                        src: base64Image,
                        title: `${params.data.pictures.title}`,
                    }                   
                    
                }
            })            

        });


        return dataProvider.update(resource, params)
    
    }

    
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

export default myDataProvider;