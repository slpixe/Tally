
export class Counter {

  _uuid: string;
  _label: string;
  _count: number;

  constructor(counter: any) {
    this._uuid = counter.uuid;
    this._label = counter.label;
    this._count = counter.count;
  }

  get() {
    console.log(this._label, this._count);
  }

  getUuid() {
    return this._uuid;
  }
  setUuid(newUuid) {
    this._uuid = newUuid;
  }

}
