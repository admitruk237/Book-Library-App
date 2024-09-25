import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispath = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    dispath(setTitleFilter(e.target.value));
  };
  const handleAuthorFilterChange = (e) => {
    dispath(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispath(setOnlyFavoriteFilter());
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
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
