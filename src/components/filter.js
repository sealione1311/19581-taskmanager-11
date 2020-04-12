const createFilterMarkup = (filter, isChecked) => {
  const {title, count} = filter;

  return (
    `<input
      type="radio"
      id="filter__${title}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${title}" class="filter__label">
      ${title} <span class="filter__${title}-count">${count}</span></label
    >`
  );
};

export const createFilter = (filters) => {
  const filtersMarkup = filters.map((filter, i) => createFilterMarkup(filter, i === 0)).join(`\n`);

  return `<section class="main__filter filter container">
    ${filtersMarkup}
  </section>`;
};
