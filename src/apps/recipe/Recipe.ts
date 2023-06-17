import { notifyPropertyChanged, Observable } from "../../utils/Observable";
import { ArrayColl } from "svelte-collections";

export type URLString = string;

export class Recipe extends Observable {
  @notifyPropertyChanged
  name: string;
  @notifyPropertyChanged
  pictures = new ArrayColl<URLString>();
  /** Text that describes more what this meal is.
   * May be multiple paragraphs.
   * Not the steps to prepare it. */
  @notifyPropertyChanged
  description: string;
  @notifyPropertyChanged
  ingredients = new ArrayColl<Ingredient>();
  /** How many people the ingredients amount will feed.
   * E.g. 2 slices of bread and 1 egg (ingredients) for 2 servings. 
   * The assumption is that the cook can multiply the ingredients
   * to feed more or less people. */
  @notifyPropertyChanged
  servings: number;
  @notifyPropertyChanged
  steps = new ArrayColl<CookingStep>();

  constructor(name: string) {
    super();
    this.name = name;
  }

  newPreparation(servings: number): Recipe {
    let copy = this.clone();
    copy.servings = servings;
    for (let ingredient of copy.ingredients) {
      ingredient.done = false;
      ingredient.amount = ingredient.amount / this.servings * copy.servings;
    }
    for (let step of copy.steps) {
      step.ongoing = false;
      step.done = false;
    }
    return copy;
  }

  clone(): Recipe {
    let copy = new Recipe(this.name);
    copy.description = this.description;
    copy.servings = this.servings;
    copy.pictures.addAll(this.pictures);
    copy.ingredients.addAll(this.ingredients.map(i => i.clone()));
    copy.steps.addAll(this.steps.map(i => i.clone()));
    return copy;
  }
}

/** Which materials are needed to make this meal */
export class Ingredient extends Observable {
  @notifyPropertyChanged
  name: string;
  /** How much, in `unit`, per servings (in Recipe) */
  @notifyPropertyChanged
  amount: number;
  /** Unit of measure
   * E.g. "liter", "tea spoon", or "cup" */
  @notifyPropertyChanged
  unit: string = null;

  /* Whether the cook has the ingredient */
  done = false;

  clone(): Ingredient {
    let copy = new Ingredient();
    Object.assign(copy, this);
    return copy;
  }
}

/** What the cook has to do to prepare the meal */
export class CookingStep extends Observable {
  @notifyPropertyChanged
  description: string;

  /** Whether the cook is currently performing this step */
  ongoing = false;
  /** Whether the cook has finished this step */
  done = false;

  clone(): CookingStep {
    let copy = new CookingStep();
    Object.assign(copy, this);
    return copy;
  }
}
