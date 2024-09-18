import { useDispatch, useSelector } from 'react-redux';
import {
  selectTitleFilter,
  resetFilters,
  setTitleFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispath = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const handleTitleFilterChange = (e) => {
    dispath(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispath(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
