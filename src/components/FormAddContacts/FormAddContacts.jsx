import { useState } from 'react';
import css from './FormAddContacts.module.css';

export function FormAddContacts({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit({ name: name, number: number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <label htmlFor="idName" className={css.label}>
        Name
      </label>
      <input
        className={css.input}
        onChange={handleChangeInput}
        type="text"
        name="name"
        id="idName"
        value={name}
        pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="idNumber" className={css.label}>
        Number
      </label>
      <input
        className={css.input}
        onChange={handleChangeInput}
        type="tel"
        name="number"
        id="idNumber"
        value={number}
        pattern="\+?[0-9\s\-\(\)]+"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// export class FormAddContacts extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChangeInput = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   handleSubmitForm = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.handleSubmitForm}>
//         <label htmlFor="idName" className={css.label}>
//           Name
//         </label>
//         <input
//           className={css.input}
//           onChange={this.handleChangeInput}
//           type="text"
//           name="name"
//           id="idName"
//           value={this.state.name}
//           pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label htmlFor="idNumber" className={css.label}>
//           Number
//         </label>
//         <input
//           className={css.input}
//           onChange={this.handleChangeInput}
//           type="tel"
//           name="number"
//           id="idNumber"
//           value={this.state.number}
//           pattern="\+?[0-9\s\-\(\)]+"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
