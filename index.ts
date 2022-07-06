let a:number = 1;
let b:string = "1234fsfsdf";

interface UserType{
    name:string;
    id:number
}

// not recommended
let o:Object=
    {
        name: "Haim",
        id:1231,
        age:34,
    }

let u:UserType = {
    name: "Haim",
    id:123,
}



function NewEmp(o:UserType)
{

}
var p1=80;

function GetAdmin() 
{
    // function body
    var p=80;
    console.log(p);
}

function GetUser() :UserType
{
    // function body
    var p=90;

    let ret:UserType={
        id:45,
        name:"Avi",
    }

    return ret;    
}

type DoorStatus = "Opened" | "Closed";
type Pais = 1 | "2" | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 43 ;
let insideDoor:DoorStatus;
insideDoor = "Closed";
let p:Pais = "2";
const countOfMunicipality:number = 1001;
var f=9;
var f=89;
let g=90;
    console.log(f);
    {
        let g=11;
        var f=12;
        console.log(f);
    }
    console.log(f);
//let vs var
// bb=34; error
for(var i=0;i<countOfMunicipality;i++)
{

}


class Sallery{

    MyName:string;
    MySum:number;
    InternalId:number;


    constructor(name:string, sum:number)
    {
        this.MyName = name;
        this.MySum = sum;
        this.InternalId=109;
    };
   

    // MoveMoneyToBank
    // MoveMoneyToSafeAccount
}



let Subaro:Car;
let Mazda:Car;

let sal1:Sallery = new Sallery("Moshe",100000);
console.log(sal1.MyName);

type funType = (a:number,b:number)=>number;
///////////////
const func1:funType = (a:number,b:number)=>{ return a+b};
let g1:number = func1(12,12);
//////////////
type firstName = string;

interface IPerson  {
    firstname:string;
    readonly age:number;
    print(a:number):string;
}

class EPerson implements IPerson
{
    firstname:string;
     age:number;

    public   print(a:number):string{
        this.age=34;
        return this.firstname;
    }
    constructor (){
        this.firstname='';
        this.age=100;
   
       }
}

type Person = {
    firstname:string;
    age:number;
    print(a:number):string;
}

class PersonC  {
    public firstname:string;
    public age:number;
    constructor (){
     this.firstname='';
     this.age=0;

    }
}


class Car{
    // Drive
    // Park
    // Km
    // Year
    // Price
    // Color
    setdetails=()=>{
        let pp1:Person;
        
        let pp2:PersonC = new PersonC();
        pp2.age = 45;
        pp1 = {age:12,firstname:'fffff',print:(a:number)=>{return "";}};
        pp1.age = 34;
    }
}


let a1:firstName;
a1="dd";

type Container<T> = { value: T };
