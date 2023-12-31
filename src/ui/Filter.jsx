import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.4rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-0);
`;

const FilterButton = styled.button`
  padding: 0.44rem 0.8rem; // the same as select
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.3s;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  &:hover:not(:disabled) {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          active={currentFilter === option.value}
          disabled={currentFilter === option.value}
          key={option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
