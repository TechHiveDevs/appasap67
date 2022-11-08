
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowPost(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="body" />
<TextField source="title" />
<ReferenceField source="userid" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}