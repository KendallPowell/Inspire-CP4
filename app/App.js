import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimesController } from "./Controllers/TimesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {

  imagesController = new ImagesController();

  quotesController = new QuotesController();

  weathersController = new WeathersController();

  todosController = new TodosController();

  timesController = new TimesController();
}

window["app"] = new App();
