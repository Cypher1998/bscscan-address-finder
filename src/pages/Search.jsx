import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      navigate('/notfound');
    } else {
      navigate(`/address/${text}`);
      setText('');
    }
  };

  return (
    <section className="search-box">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search by Address"
          value={text}
          onChange={onChange}
        />
        <button type="submit">
          <FaSearch size={20} />
        </button>
      </form>
    </section>
  );
};
export default Search;
