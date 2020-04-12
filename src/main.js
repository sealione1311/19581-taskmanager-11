import {createSiteMenu} from "./components/site-menu.js";
import {createFilter} from "./components/filter.js";
import {createTask} from "./components/task.js";
import {createBoard} from "./components/board.js";
import {createTaskEdit} from "./components/task-edit.js";
import {createLoadMoreButton} from "./components/load-button.js";
import {generateFilters} from "./mock/filters.js";
import {generateTasks} from "./mock/task.js";
import {countFilters} from "./utils.js";

const TASK_COUNT = 25;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const mainContainer = document.querySelector(`.main`);
const headerContainer = mainContainer.querySelector(`.main__control`);

const renderSegment = (container, segment, place = `beforeend`) => {
  container.insertAdjacentHTML(place, segment);
};

const tasks = generateTasks(TASK_COUNT);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

const createTasks = () => {
  for (let i = 1; i < showingTasksCount; i++) {
    renderSegment(taskListContainer, createTask(tasks[i]));
  }
};
const filtredTitles = countFilters(tasks);
const filters = generateFilters(filtredTitles);

renderSegment(headerContainer, createSiteMenu());
renderSegment(mainContainer, createFilter(filters));
renderSegment(mainContainer, createBoard());

const taskListContainer = mainContainer.querySelector(`.board__tasks`);
const boardContainer = mainContainer.querySelector(`.board`);

renderSegment(taskListContainer, createTaskEdit(tasks[0]));
createTasks();

renderSegment(boardContainer, createLoadMoreButton());
const loadMoreButton = boardContainer.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderSegment(taskListContainer, createTask(task)));
  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
