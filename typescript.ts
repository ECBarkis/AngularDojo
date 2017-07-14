var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
const myObj = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 
var arrayOne: Array<boolean> = [true, false, true, true]; 
var arrayTwo: Array<any> = [1, 'abc', true, 2];
const myObj = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: number;
    _priv: number;

    constructor(val: number){
        this.val = 0;
        this.val = val;
    }

    doSomething(){
        this._priv = 10;
    }
}

let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): void{
	throw new Error('Error message');
}
