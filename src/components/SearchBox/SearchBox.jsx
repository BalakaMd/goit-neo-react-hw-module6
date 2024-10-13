import styles from './SearchBox.module.css';

const SearchBox = ({ onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
