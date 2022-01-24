export class Platform
{
    //Atributos
    private name:string;
    private releaseYear:number;
    private company:string;
    private nBits:number;
    private generation:string;
    private hasHD:boolean;
    private hdSize:number;
    private hasInternetConnetion:boolean;
    private storageDevice:string;
    private color:string;

    //Constructor
    constructor(name:string, releaseYear:number, company:string, nBits:number, generation:string, hasHD:boolean, hdSize:number, hasInternetConnetion:boolean, storageDevice:string, color:string)
    {
        this.name = name;
        this.releaseYear =releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnetion = hasInternetConnetion;
        this.storageDevice = storageDevice;
        this.color = color;
    }

    //Metodos Setter & Getter
    public getname() : string {
        return this.name;
    }
    public setname(v : string) {
        this.name = v;
    }
    public getreleaseYear() : number {
        return this.releaseYear;
    }
    public setreleaseYear(v : number) {
        this.releaseYear = v;
    }
    public getcompany() : string {
        return this.company;
    }
    public setcompany(v : string) {
        this.company = v;
    }
    public getnBits() : number {
        return this.nBits;
    }
    public setnBits(v : number) {
        this.nBits = v;
    }
    public getgeneration() : string {
        return this.generation;
    }
    public setgeneration(v : string) {
        this.generation = v;
    }
    public gethasHD() : boolean {
        return this.hasHD;
    }
    public sethasHD(v : boolean) {
        this.hasHD = v;
    }
    public gethdSize() : number{
        return this.hdSize;
    }
    public sethdSize(v : number) {
        this.hdSize = v;
    }
    public gethasInternetConnetion() : boolean {
        return this.hasInternetConnetion;
    }
    public sethasInternetConnetion(v : boolean) {
        this.hasInternetConnetion = v;
    }
    public getstorageDevice() : string {
        return this.storageDevice;
    }
    public setstorageDevice(v : string) {
        this.storageDevice = v;
    }
    public getcolor() : string {
        return this.color;
    }
    public setcolor(v : string) {
        this.color = v;
    }
    
    
    
    
}
    
    
    
    
