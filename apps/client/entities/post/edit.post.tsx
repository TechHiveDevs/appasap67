
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditPost(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="body" variant="outlined"   />
<TextInput source="title" variant="outlined"   />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}