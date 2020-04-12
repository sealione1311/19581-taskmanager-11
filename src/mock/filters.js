const Filter = {
  ALL: `all`,
  OVERDUE: `overdue`,
  TODAY: `today`,
  FAVORITES: `favorites`,
  REPEATING: `repeating`,
  ARCHIVE: `archive`,
};

export const generateFilters = (obj) => {
  const filterTitles = Object.entries(obj);
  return filterTitles.map((filter) => {
    const [title, count] = filter;
    return {
      title: Filter[title.toUpperCase()],
      count,
    };
  });
};


