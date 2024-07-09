import React, { useState } from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { Input } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Switch } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const initialData = [
  { id: 1, name: '', value: '', active: true },
  // Add items 
];

const CrossReferenceDialog = ({ onClose }) => {
  const [data, setData] = useState(initialData);

  const handleChange = (e, field) => {
    const updatedData = data.map(item => 
      item.id === e.dataItem.id ? { ...item, [field]: e.value } : item
    );
    setData(updatedData);
  };

  const addItem = () => {
    const newItem = { id: data.length + 1, name: '', value: '', active: true };
    setData([...data, newItem]);
  };

  return (
    <Dialog onClose={onClose} title="Cross Reference">
      <Grid
        data={data}
        editField="inEdit"
        onItemChange={(e) => handleChange(e, e.field)}
      >
        <GridToolbar>
          <Button onClick={addItem}>Add New</Button>
        </GridToolbar>
        <GridColumn field="name" title="Name" editor="text" cell={cellWithInput} />
        <GridColumn field="value" title="Value" editor="dropdown" cell={cellWithDropDown} />
        <GridColumn field="active" title="Active Status" editor="boolean" cell={cellWithSwitch} />
      </Grid>
      <DialogActionsBar>
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button primary={true}>Save</Button>
      </DialogActionsBar>
    </Dialog>
  );
};

const cellWithInput = (props) => {
  return (
    <td>
      <Input
        value={props.dataItem[props.field]}
        onChange={(e) => props.onChange({ ...props, value: e.target.value })}
      />
    </td>
  );
};

const cellWithDropDown = (props) => {
  return (
    <td>
      <DropDownList
        data={['Option1', 'Option2', 'Option3']}
        value={props.dataItem[props.field]}
        onChange={(e) => props.onChange({ ...props, value: e.target.value })}
      />
    </td>
  );
};

const cellWithSwitch = (props) => {
  return (
    <td>
      <Switch
        checked={props.dataItem[props.field]}
        onChange={(e) => props.onChange({ ...props, value: e.target.checked })}
      />
    </td>
  );
};

export default CrossReferenceDialog;
