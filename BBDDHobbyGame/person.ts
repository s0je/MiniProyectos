export class Person
{
    //Declaracion de atributos
    private name:string;
    private nationality:string;
    private profession:string;
    private experienceYears:number;
    //Constructor
    constructor(name:string,nationality:string,profession:string,experienceYears:number)
    {
        this.name = name;
        this.nationality = nationality;
        if(profession === "developer" || profession === "tester" || profession === "manager" || profession === "director")
        {
            this.profession = profession;
        }
        this.experienceYears =experienceYears;
    }
    //Metodos Setter & Getter
    public getname() : string {
        return this.name;
    }
    public setname(v : string) {
        this.name = v;
    }
    public getnationality() : string {
        return this.nationality;
    }
    public setnationality(v : string) {
        this.nationality = v;
    }
    public getprofession() : string {
        return this.profession;
    }
    public setprofession(v : string) {
        if(v === "developer" || v === "tester" || v === "manager" || v === "director")
        {
            this.profession = v;
        }
    }
    public getexperienceTears() : number {
        return this.experienceYears;
    }
    public setexperienceTears(v : number) {
        this.experienceYears = v;
    }
    public isPerson(person:Person):boolean
    {
        if(person === person)
        {
            return true
        }
    }
    public printValor()
    {
        return this.name+" "+this.nationality+" "+this.profession+" "+this.experienceYears;
    }
    public printAll():string
    {
        return "Name: "+this.name+"\nNationality: "+this.nationality+"\nProfession: "+this.profession+"\nYears experience: "+this.experienceYears;
    }

    
}