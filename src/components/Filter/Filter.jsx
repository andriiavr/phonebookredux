import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { updateFilter } from "../../redux/actions";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={(e) => dispatch(updateFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
