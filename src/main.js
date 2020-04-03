import {createSiteMenu} from "./components/site-menu.js";
import {createFilter} from "./components/filter.js";
import {createTask} from "./components/task.js";
import {createBoard} from "./components/board.js";
import {createTaskEdit} from "./components/task-edit.js";
import {createLoadMoreButton} from "./components/load-button.js";

const TASK_COUNT = 3;

const mainContainer = document.querySelector(`.main`);
const headerContainer = mainContainer.querySelector(`.main__control`);

const renderSegment = (container, segment, place = `beforeend`) => {
  container.insertAdjacentHTML(place, segment);
};

const createTasks = () => {
  for (let i = 0; i < TASK_COUNT; i++) {
    renderSegment(taskListContainer, createTask());
  }
};

renderSegment(headerContainer, createSiteMenu());
renderSegment(mainContainer, createFilter());
renderSegment(mainContainer, createBoard());

const taskListContainer = mainContainer.querySelector(`.board__tasks`);
const boardContainer = mainContainer.querySelector(`.board`);

renderSegment(taskListContainer, createTaskEdit());
createTasks();
renderSegment(boardContainer, createLoadMoreButton());
