import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSLice';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.phone}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Видалити
      </button>
    </li>
  );
}