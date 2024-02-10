import Form from 'react-bootstrap/Form';
import { FC } from 'react';
import { SelectIthem } from './types';

const Selector: FC<{ list: SelectIthem[], label: string, setter: (i: string) => void }> = ({ list, label, setter }) => {
  return (
    <Form.Select onChange={i => setter(i.target.value)}>
      <option>Select {label}</option>
      {list.map((item, index) =>
        <option key={index} value={item.id}>{item.name}</option>
      )};
    </Form.Select>
  );
}

export default Selector;