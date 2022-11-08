
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreatePost(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="body" variant="outlined"   />
<TextInput source="title" variant="outlined"   />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
