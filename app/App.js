import { ImagesController } from "./Controllers/ImagesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  imagesController = new ImagesController();
}

window["app"] = new App();
