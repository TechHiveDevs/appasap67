
import { 
  Create,
  SimpleForm,
  
AutocompleteInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateReact(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <AutocompleteInput variant="outlined" source="type" choices={[
{ id: "like", name: "like" },
{ id: "haha", name: "haha" },
{ id: "angry", name: "angry" },
{ id: "wow", name: "wow" },
{ id: "sad", name: "sad" },
]}  />
<ReferenceInput label="post" source="postid" reference="post">
        <AutocompleteInput variant="outlined" /* optionText="post"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
