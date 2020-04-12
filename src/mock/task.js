import {COLORS} from "../const.js";
import {getRandomArrayItem, getRandomIntegerNumber, getRandomBoolean} from "../utils.js";

const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пересмотреть лекцию`,
  `Исправить ошибки`,
  `Пройти интенсив на соточку`,
];

const DefaultRepeatingDays = {
  "mo": getRandomBoolean(),
  "tu": getRandomBoolean(),
  "we": getRandomBoolean(),
  "th": getRandomBoolean(),
  "fr": getRandomBoolean(),
  "sa": getRandomBoolean(),
  "su": getRandomBoolean(),
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = getRandomBoolean() ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  const daysKeys = Object.keys(DefaultRepeatingDays);
  const repeatingDays = daysKeys.map((day) => ({[day]: false}));
  return Object.assign({}, ...repeatingDays);
};

const generateTask = () => {
  const dueDate = getRandomBoolean() ? null : getRandomDate();
  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? generateRepeatingDays() : DefaultRepeatingDays,
    color: getRandomArrayItem(COLORS),
    isArchive: getRandomBoolean(),
    isFavorite: getRandomBoolean(),
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTasks};
