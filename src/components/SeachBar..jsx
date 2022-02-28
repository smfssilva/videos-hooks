import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(term)
  }
  return (
    <div className="ui segment search-bar">
      <form action="" className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor="">Search for a video</label>
          <input 
            type="text" 
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )

}

export default SearchBar;