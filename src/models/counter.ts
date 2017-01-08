
export class Counter {

  uuid: number;
  label: string;
  count: number;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.label = data.label;
    this.count = data.count;
  }

  //get() {
    //console.log(this._label, this._count);
  //}

  getUuid() {
    return this.uuid;
  }
  setUuid(newUuid) {
    this.uuid = newUuid;
  }

}
