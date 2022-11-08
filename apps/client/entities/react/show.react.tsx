
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowReact(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="type" />
<ReferenceField source="postid" reference="post" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}