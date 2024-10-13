import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          phone={contact.number}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </>
  );
};

export default ContactList;
