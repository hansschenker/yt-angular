import { BehaviorSubject, map, scan, Subject } from "rxjs";

export class Store<T> {
  store: BehaviorSubject<T>;
  stateUpdates = new Subject<T>();

  constructor(initialState: T) {
    this.store = new BehaviorSubject<T>(initialState);
    // accumulate state
    this.stateUpdates.pipe(
        scan<T>((acc: T, curr: T) => { return { ...acc, ...curr }})
    ).subscribe(this.store);
  }

  updateState(state: T) {
    this.stateUpdates.next(state);
  }

  selectState(key: keyof T){
    return this.store.pipe(
      map(state => state[key])
    );
  }

  stateChanges(){
    return this.store.asObservable();
  }
}

