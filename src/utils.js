const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

export const countFilters = (items) => {
  const currentItems = items.slice(1);
  const gettoday = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString();
  };
  const now = new Date();
  const today = gettoday(now);
  const counter = {
    all: currentItems.length,
    overdue: 0,
    today: 0,
    favorites: 0,
    repeating: 0,
    archive: 0,
  };

  for (let item of currentItems) {

    if (item.isArchive) {
      counter.archive++;
    }
    if (item.isFavorite) {
      counter.favorites++;
    }
    if (!item.dueDate) {
      counter.repeating++;
    }
    if (!!item.dueDate && gettoday(item.dueDate) < today) {
      counter.overdue++;
    }
    if (!!item.dueDate && gettoday(item.dueDate) === today) {
      counter.today++;
    }
  }
  return counter;
};
export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

export const getRandomBoolean = () => {
  return Math.random() > 0.5;
};
