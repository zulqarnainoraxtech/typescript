// enum LanguageKnown {
//     English = "English",
//     German = "German",
//     French = "French"
// }

// let student = {
//     Name: "Zulqarnain",
//     Age: 23,
//     Phone: 976789,
//     Language: LanguageKnown.English
// }


// let studentsList = [
//     { Name: "Ahmad", Age: 22, Phone: 54342345, Language: LanguageKnown.German },
//     { Name: "Ali", Age: 20, Phone: 543242345, Language: LanguageKnown.French },
//     { Name: "Farhan", Age: 25, Phone: 32433345, Language: LanguageKnown.German },
// ];

// studentsList.push(student)

// for (const element of studentsList) {
//     console.log(
//         "Name: " + element.Name +
//         " Age: " + element.Age +
//         " Language Known: " + element.Language
//     );
// }

// function getAllStudents(students: any[]) {
//     students.forEach(element => {
//         console.log(
//             "Name: " + element.Name +
//             " Age: " + element.Age +
//             " Language Known: " + element.Language
//         );
//     });
// }

// getAllStudents(studentsList)

//Rest parameter

// function getNums(...nums:number[]){
//     nums.forEach(element => {
//         console.log("Number ", element);
//     });
// }

// getNums(1,2,3,4,5);


//Default parameter 
// function getInfo(info:string = "Happy"){
//     console.log(info)
// }
// getInfo("sad");//sad will print

//? arrow function 

// const printInfo = (name:string, age:number, hobies:string[]) => {
//     console.log("Name : ", name);
//     console.log("Age : ", age);
//     console.log("your hobbies are : ")
//     hobies.forEach(hobby => {
//         console.log(hobby)
        
//     });

// }
// printInfo("zulqarnain",23,["football","coding","running"])

// interface studentInfo {
//     name: string,
//     age:number
// }

// let student:studentInfo = {
//     name: "zulqarnain",
//     age: 23
// }



// function  getstudentInfo(students:studentInfo){
//     console.log("STD", students)
        
// };
// getstudentInfo(student)
    

//? classes in typeScript

// interface Person {
//     name: string,
//     age: number
// }

// class Student implements Person {
//     name: string;
//     age: number;
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age
//     }
// }

// const s1 = new Student("Zulqarnain",23);
// const s2 = new Student("Farhan",23);
// const s3 = new Student("Ali",23);
// console.log(s1);
// console.log(s2);
// console.log(s3);

// interface Animal {
//     name: string,
//     sound(): void
// }

// class Dog implements Animal {
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     sound(){
//         console.log("wow wow wow");
//     }
// }

// const dog1 = new Dog("wisky")
// console.log(dog1);
// dog1.sound()

//? interface extending another interface 

// interface Person {
//     name: string
// }

// interface Employee extends Person {
//     sallary: number
// }

// class Developer {
//     name: string;
//     sallary: number;

//     constructor(name:string,sallary:number){
//         this.name = name;
//         this.sallary = sallary
//     }
// }

// const d1 = new Developer("Zulqarnain",30000)
// console.log(d1);


//? class implementing multiple interfaces 

// interface HasEmail {
//     email: string
// }


// interface HasNumber {
//     phone: number
// }


// class User implements HasEmail,HasNumber {
//     email:string;
//     phone:number;

//     constructor(email:string,phone:number){
//         this.email = email;
//         this.phone = phone;
//     }
// }

// const u1 = new User("abc@gmail.com",100233232);
// console.log(u1);


//? Access Specifier in classes 
// Public  
// class Person {
//     public name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const p = new Person("Ali ");
// console.log(p.name); 


// Private
// class Person {
//     private salary: number;

//     constructor(salary: number) {
//         this.salary = salary;
//     }
//     getSalary(){
//         console.log(this.salary)
//     }
// }

// const p = new Person(5000);
// p.getSalary()
// console.log(p.salary); // salary is private so error



    // class Person {
    //     protected age: number;

    //     constructor(age: number) {
    //         this.age = age;
    //     }
    // }

    // class Student extends Person {
    //     showAge() {
    //         console.log(this.age); // ✅ allowed
    //     }
    // }

    // const s = new Student(22);
    // console.log(s.age); // ❌ ERROR


// access modifiers short systex 
// class User {
//     constructor(
//         public name: string,
//         private age: number
//     ) {}
// }

// const u = new User("Ali", 22);
// console.log(u.name);  // ✔️ public
// console.log(u.age);   // ❌ private


//? Protected in inheritance

// class Person {
//     protected city = "Lahore";
// }

// class Employee extends Person {
//     showCity() {
//         console.log(this.city); // ✔️ allowed (protected)
//     }
// }

// const emp = new Employee();
// console.log(emp.city); // ❌ ERROR



// class BankAccount {
//     private _balance = 0;

//     get balance() {
//         return this._balance;
//     }

//     set balance(amount: number) {
//         if (amount < 0) throw new Error("Amount cannot be negative");
//         this._balance = amount;
//     }
// }

// const acc = new BankAccount();
// acc.balance = 500;    // setter
// console.log(acc.balance); // getter

