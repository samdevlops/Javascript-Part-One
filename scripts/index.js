const arr = [1,2,3,4,5];

console.log(move(arr, 2, 2));

function move(arr, a, b){
    if(b>arr.length)
        console.error('Offset is invalid');

    const carry = arr[a];  
    for(let p=0;p<b;p++){
        arr[a+p]=arr[a+p+1];
    }
    arr[b]=carry;
    return arr;
}



// function except(nums, srch){
//     const output = [];
//     for(let n of nums){
//        if(!srch.includes(n))
//             output.push(n);
//     }
//     return output;
// }

// let numbers = arrayFromRange(10,4);

// console.log(numbers);

// function arrayFromRange(a, b){
//     let arr = [];
//     for(let p=a;p<b;p++){
//         arr.push(p);
//     }

//     return arr;
// }

// const myArray = [1, 2, 3, 4];

// document.getElementById('para').innerHTML = myArray;


// function addElement(){
//     var elm = document.getElementById("inp").value;
//     console.log(elm)
//     myArray.push(elm);
//     //console.log(getElementByName('element').value());
//     //window.alert("Element added successfully"); 
//     document.getElementById('para').innerHTML = myArray;  
// }

// function searching(){
//     var elm = document.getElementById("inp").value;
//     console.log(myArray.indexOf(elm));
//     //console.log(getElementByName('element').value());
//     //window.alert("Element added successfully"); 
//     document.getElementById('para').innerHTML = myArray;  
// 


// function sorted(){
//     myArray.sort();
//     console.log(myArray);
//     document.getElementById('para').innerHTML = myArray;
// }

// function deleteAll(){
//     myArray.length=0;
//     document.getElementById('para').innerHTML = myArray;
// }

// function deleteOne(){
//     var elm = document.getElementById("inp").value;
//     console.log(myArray.splice(myArray.indexOf(elm),1));
//     //console.log(getElementByName('element').value());
//     //window.alert("Element added successfully"); 
//     document.getElementById('para').innerHTML = myArray;  
// }
// Exercise - Blogpost Object

// const blogPost = {
//     title : 'My Coding Journey',
//     body : 'I did 2 hours of coding daily for past 6 months',
//     author : 'Mishra Saurabh',
//     views : 312,
//     comments : {
//         author:'rahul',
//         body:'Bahut sahi bhai'
//     },
//     isLive:true
// }

// console.log(blogPost);

// Exercise - Address Object

// 1.Factory Method

// function setAddress(street, city, zipcode){
//     return{
//         street,
//         city,
//         zipcode
//     }
// }

// // 2.Constructor Method
// function Address(street, city, zipcode){
//     this.street=street;
//     this.city=city;
//     this.zipcode=zipcode;
// }

// function areEqual(address1, address2){
// return address1.street===address2.street &&
//         address1.city===address2.city &&
//         address1.zipcode===address2.zipcode;
// }

// function areSame(address1, address2){
//     return address1===address2;
// }
// const address1 = setAddress('MG Road','Delhi','102011');
// const address2 = new Address('MG Road','Delhi','102011');
// const address3=address2;
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address3, address2));


//Date Object

// let now = new Date();
// let d = now.toISOString();
// now.setFullYear(1997);
// console.log(now);

//Objects

// function createCircle(radius){
//     return {
//         radius,
//         draw(){
//             console.log('Draw circle of radius - ', radius);
//         },
//         area(){
//             console.log('Area of the circle - ', Math.PI*radius*radius);
//         }
//     };
// }

// const circle1 = createCircle(5);
// console.log(circle1);

// const circle2 = createCircle(17);
// console.log(circle2);
// function fizzBuzz(n){
//     // console.log(n.isInteger());
// if(typeof n != 'number')    
//     console.log('Not a Number');    
// else if(n%3==0 && n%5==0)
//     console.log('FizzBuzz');
// else if(n%3==0 && n%5!=0)
//     console.log('Fizz');
// else if(n%3!=0 && n%5==0)
//     console.log('Buzz');
// else    
//     console.log(n);    
// }

// console.log(fizzBuzz('pqr'));
