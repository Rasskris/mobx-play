import { makeAutoObservable } from 'mobx';

export class WithBooleanFlag {
  value = false;

  constructor(initFlag = false) {
    makeAutoObservable(this);
    this.value = initFlag;
  }

  setTrue = () => {
    this.value = true;
  };

  setFalse = () => {
    this.value = false;
  };

  toggle = () => {
    this.value = !this.value;
  };
}
