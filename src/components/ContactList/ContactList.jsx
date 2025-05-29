import { useSelector } from 'react-redux';
import Contact from '../Contacts/Contact';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}