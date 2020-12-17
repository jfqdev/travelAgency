//---LIBRARIES & TOOLS
import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices
} from 'react-admin';


//-----------------Create Validators---------------------------------
//--->Validate Destination<---
const validateDestination = [required('Destination must be included'), regex(/, /, 'Use this format: Capital, País' )]


//--->Validate Price<---
const validatePrice = [required(), regex(/^\d+$/, 'Price example : 5000')]

//--->Validate Cuotas<---
const validateCuotas = [required(), regex(/^\d+$/, 'Cuotas example : 5000')]


//--->Validate Description<---
const validateDescription = [required()];

//--->Validate Image<---
const validateImage = [required('Include an image --> .jpg ')]

//-----------------Edit Validators--------------------------------------
//--->Validate Destination<---
const validateEditDestination = [regex(/, /, 'Use this format: Capital, País' )]

//--->Validate Price<---
const validateEditPrice = [regex(/^\d+$/, 'Price example : 5000')]

//--->Validate Cuotas<---
const validateEditCuotas = [regex(/^\d+$/, 'Cuotas example : 5000')]



export {
    validateDestination,
    validatePrice,
    validateCuotas,
    validateDescription,
    validateImage,
    validateEditDestination,
    validateEditPrice,
    validateEditCuotas
}












/* Alternatively, you can specify a validate prop directly in <Input> components,
 taking either a function or an array of functions. React-admin already bundles a
 few validator functions, that you can just require, and use as input-level validators:

required(message) if the field is mandatory,
minValue(min, message) to specify a minimum value for integers,
maxValue(max, message) to specify a maximum value for integers,
minLength(min, message) to specify a minimum length for strings,
maxLength(max, message) to specify a maximum length for strings,
number(message) to check that the input is a valid number,
email(message) to check that the input is a valid email address,
regex(pattern, message) to validate that the input matches a regex,
choices(list, message) to validate that the input is within a given list, */

/* export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="First Name" source="firstName" validate={validateFirstName} />
            <TextInput label="Email" source="email" validate={validateEmail} />
            <TextInput label="Age" source="age" validate={validateAge}/>
            <TextInput label="Zip Code" source="zip" validate={validateZipCode}/>
            <SelectInput label="Sex" source="sex" choices={[
                { id: 'm', name: 'Male' },
                { id: 'f', name: 'Female' },
            ]} validate={validateSex}/>
        </SimpleForm>
    </Create>
); */