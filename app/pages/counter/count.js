export class Count {

    //dont appear to do much
    public name: string;
    public count: number;
    public lastUpdated: Date;
    public sinceUpdated: number;

    constructor(name, count){
        this.name = name;
        this.count = count;
    }
}