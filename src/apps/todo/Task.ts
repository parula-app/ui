import { notifyPropertyChanged, Observable } from "../../utils/Observable";
import { ArrayColl } from "svelte-collections";

export class Task extends Observable {
  @notifyPropertyChanged
  name: string;
  @notifyPropertyChanged
  done = false;

  constructor(name: string) {
    super();
    this.name = name;
  }

  toggleDone() {
    this.done = !this.done;
    console.log(this.name, "is now", this.done ? "done" : "not done");
  }
}

/** TODO hook up to Pia TODO list app, and store it in localstorage */
export const TODOList = new ArrayColl<Task>();
