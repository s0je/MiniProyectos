import { Person } from "./person";
import { Platform } from "./platform";

export class Videogame
{
    private title:string;
    private releaseYear:number;
    private developers: Person [];
    private nacionality:string;
    private director: Person;
    private languages: string [];
    private platform: Platform [];
    private price: number;
    private score: number;

    constructor(title:string, releaseYear:number, developers:Person[], nacionality:string,director:Person,languages:string[],platforms:Platform[],price:number,score:number)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nacionality = nacionality;
        this.director = director;
        this.languages = languages;
        this.platform = platforms;
        this.price = price;
        this.score = score;
    }
    public gettitle() : string {
        return this.title;
    }
    public settitle(v : string) {
        this.title = v;
    }
    public getreleaseYear() : number {
        return this.releaseYear;
    }
    public setreleaseYear(v : number) {
        this.releaseYear = v;
    }
    public getdevelopers() {
        let temp= [];
        for(let i=0; i<this.developers.length; i++)
        {
            temp.push(this.developers[i].getname());
        }
        return temp;
    }
    public setdevelopers(v : Person[]) {
        this.developers = v;
    }
    public getnacionality() : string {
        return this.nacionality;
    }
    public setnacionality(v : string) {
        this.nacionality = v;
    }
    public getdirector() : Person {
        return this.director;
    }
    public setdirector(v : Person) {
        this.director = v;
    }
    public getlanguages() : string[]{
        return this.languages;
    }
    public setlanguages(v : string[]) {
        this.languages = v;
    }
    public getplatform() {

        let temp= [];
        for(let i=0; i<this.platform.length; i++)
        {
            temp.push(this.platform[i].getname());
        }
        return temp;
    }
    public setplatform(v : Platform[]) {
        this.platform = v;
    }
    public getprice() : number {
        return this.price;
    }
    public setprice(v : number) {
        this.price = v;
    }
    public getscore() : number {
        return this.score;
    }
    public setscore(v : number) {
        this.score = v;
    }
    
    public Plataforma(juego:string):boolean
    {
        for(let i=0;i<this.platform.length; i++)
        {
            if(this.platform[i].getname() == juego)
            {
                return true;
            }
        }
        return false;
        
    }
    public Developer(trabajador:Person):boolean
    {
        for(let i=0; i<this.developers.length; i++)
        {
            if(this.developers[i] == trabajador)
            {
                return true;
            }
        }
        return false;
    }
    public Language(language:string):boolean
    {
        for(let i=0; i<this.languages.length;i++)
        {
            if(this.languages[i] == language)
            {
                return true;
            }
        }
        return false;
    }

    public stringDeveloper()
    {
        
    }
        
    public printValor()
    {
        return this.title+" "+this.releaseYear+" "+this.getdevelopers()+" "+this.nacionality+" "+this.director.getname()+" "+this.getlanguages()+" "+this.getplatform()+" "+this.price+" "+this.score;
    }

    public printAll()
    {
        return "Title: "+this.title+"\nDevelopers: "+this.getdevelopers()+"\nRelease Year: "+this.releaseYear+"\nNacionality: "+this.director.getname()+"\nLanguages: "+this.getlanguages()+"\nPlatforms: "+this.getplatform()+"\nPrice: "+this.price+"\nScore: "+this.score;
    }
    
    
    
    
    
    
}