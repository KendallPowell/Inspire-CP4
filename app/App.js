import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  // valuesController = new ValuesController();

  imagesController = new ImagesController();

  quotesController = new QuotesController();

  weathersController = new WeathersController();
}

window["app"] = new App();
