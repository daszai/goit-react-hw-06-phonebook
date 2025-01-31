import { useDispatch, useSelector } from 'react-redux';

import { contactsChangeslice2 } from './prop';

export const App = () => {
  const dispatch = useDispatch();

  const contactsChange = () => {
    dispatch(contactsChangeslice2());
  };

  const filter2 = useSelector(state => state.name);
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm
        name={name}
        change={change}
        number={number}
        changeTel={changeTel}
        add={add}
      /> */}
      {/* <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} /> */}
      {/* //<Contacts contactsChange={filterS} deleteContacts={deleteContacts} /> */}
      <button onClick={contactsChange}>{filter2}</button>
    </div>
  );
};
