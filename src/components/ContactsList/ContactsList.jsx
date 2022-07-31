import s from './ContactsList.module.css';

export default function ContactsList({ filteredContacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li className={s.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
