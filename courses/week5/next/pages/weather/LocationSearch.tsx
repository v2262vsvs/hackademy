import React, {FC, useState} from "react";

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  return (
    <div className="">
      <label id="text ">
        <input id="text" placeholder="Add Location" className="ml-1 mr-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent inline-block p-1.5 shadow-xl rounded " type="text" value={locationSearch}
               onChange={e => setLocationSearch(e.target.value)}/>
      </label>
      <button className="btn btn-primary  inline-block px-7 p-1.5 text-white bg-green-600   hover:bg-green-500 hover:text-white rounded shadow-xl"
              onClick={addLocation} disabled={disableSearch}>Search</button>
    </div>
  );
}
