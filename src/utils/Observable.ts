export class Observable {
  private observers = [];
  _properties = {};

  subscribe(observerFunc) {
    if (typeof (observerFunc) != "function") {
      throw new Error("Need function as observer");
    }
    console.log("subscribe", this.observers.length);
    this.observers.push(observerFunc);
    observerFunc(this);
    return () => {
      arrayRemove(this.observers, observerFunc);
      console.log("unsubscribe", this.observers.length);
    };
  }

  notifyChanged(propertyName: string = null) {
    console.log("fire observers");
    for (const observer of this.observers) {
      try {
        observer(propertyName);
      } catch (ex) {
        console.error(ex);
      }
    }
  }
}

function arrayRemove<T>(array: Array<T>, item: T) {
  const pos = array.indexOf(item);
  if (pos != -1) {
    array.splice(pos, 1);
  }
}


// TODO doesn't work, setter not called
export function notifyPropertyChanged(obj: Observable, propertyName: string): void {
  console.log("notifyPropertyChanged", propertyName);
  let val;
  Object.defineProperty(obj, propertyName, {
    set(value) {
      console.log("setting", propertyName, "to", value);
      val = value;
      //obj._properties[propertyName] = value;
      this.notifyChanged(propertyName);
    },
    get() {
      return val;
      // return obj._properties[propertyName];
    },
  });
}

export function notifySetterChanged(obj: Observable, propertyName: string): void {
  let descr = Object.getOwnPropertyDescriptor(obj, propertyName);
  let originalSetter = descr.set;
  descr.set = (value) => {
    console.log("setting with setter", propertyName);
    originalSetter.call(this, value);
    this.notifyChanged(propertyName);
  };
}
