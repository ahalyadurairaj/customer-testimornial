
var maindiv=document.createElement('div');
maindiv.setAttribute('id','parentdiv')
document.body.append(maindiv);

var face = document.createElement('img');
face.setAttribute('src','pic2.jpeg');
face.setAttribute('id','images');

maindiv.append(face);

var personname = document.createElement('h1');
personname.innerText='John';
maindiv.append(personname);

var Des = document.createElement('h3');
Des.innerText='Software Engineer';
maindiv.append(Des);



var para1 = document.createElement('p');
para1.setAttribute('id','destination');
para1.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum est quidem doloribus saepe repellendus odio corrupti repudiandae, laboriosam, a nam reprehenderit cupiditate et maxime fugit nihil. Voluptatum, recusandae magnam! Ea!'
maindiv.append(para1);var maindiv=document.createElement('div');
maindiv.setAttribute('id','parentdiv')
document.body.append(maindiv);

var face = document.createElement('img');
face.setAttribute('src','pic2.jpeg');
face.setAttribute('id','images');

maindiv.append(face);

var personname = document.createElement('h1');
personname.innerText='John';
maindiv.append(personname);

var Des = document.createElement('h3');
Des.innerText='Software Engineer';
maindiv.append(Des);



var para1 = document.createElement('p');
para1.setAttribute('id','destination');
para1.innerText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum est quidem doloribus saepe repellendus odio corrupti repudiandae, laboriosam, a nam reprehenderit cupiditate et maxime fugit nihil. Voluptatum, recusandae magnam! Ea!'
maindiv.append(para1);

var icons=document.createElement('div');
icons.setAttribute('id','icondiv')
maindiv.append(icons);



var leftarrow = document.createElement('i');
leftarrow.setAttribute('class','fa-solid fa-chevron-left');
icons.append(leftarrow);



var rightarrow = document.createElement('i');
rightarrow.setAttribute('class','fa-solid fa-chevron-right');
icons.append(rightarrow);


let arr = [{
        img:"pic2.jpeg",
        Name: 'John',
        Destination: 'software developer',
        Review: 'The work timings are very flexible, and the work culture is also very nice. All the employees are very friendly regardless of seniors and juniors'
    },
     {
        img:"pic3.jpeg",
        Name: 'Jones',
        Destination: ' software Designer',
        Review: ' The company is open to innovation and readily adopts latest technologies'
    
     },
     {
        img:"pic4.jpeg",
        Name: 'victim',
        Destination: 'Backend developer',
        Review: 'Great learning and good support in teams. They always ready to invest on employees skill development. Some other benefits like extra offs to have good work life balance.'
    
     },
     {
        img:"pic5.jpeg",
        Name: 'mogan',
        Destination: 'Frontend Developer',
        Review: 'Great company culture'
    
     }
    
    ]


 var data=0;


let buttons = document.querySelectorAll("i");
console.log(buttons);

buttons.forEach((x,index) => {
   x.addEventListener('click',() => {
      if(index == 0){
         if(data == 0){
          data = arr.length-1
         }
         data--

         face.src=arr[data].img;
         personname.innerText=arr[data].Name;
         Des.innerText=arr[data].Destination;
         para1.innerText=arr[data].Review;
      }
      else {
         data++
         if(data > arr.length-1){
          data=0;
         }

         face.src=arr[data].img;
         personname.innerText=arr[data].Name;
         Des.innerText=arr[data].Destination;
         para1.innerText=arr[data].Review;
      }
   });
});








// var icons=document.createElement('div');
// icons.setAttribute('id','icondiv')
// maindiv.append(icons);



// var leftarrow = document.createElement('i');
// leftarrow.setAttribute('class','fa-solid fa-chevron-left');
// icons.append(leftarrow);



// var rightarrow = document.createElement('i');
// rightarrow.setAttribute('class','fa-solid fa-chevron-right');
// icons.append(rightarrow);


// let arr = [{
//         img:"pic2.jpeg",
//         Name: 'John',
//         Destination: 'software developer',
//         Review: 'The work timings are very flexible, and the work culture is also very nice. All the employees are very friendly regardless of seniors and juniors'
//     },
//      {
//         img:"pic3.jpeg",
//         Name: 'Jones',
//         Destination: ' software Designer',
//         Review: ' The company is open to innovation and readily adopts latest technologies'
    
//      },
//      {
//         img:"pic4.jpeg",
//         Name: 'victim',
//         Destination: 'Backend developer',
//         Review: 'Great learning and good support in teams. They always ready to invest on employees skill development. Some other benefits like extra offs to have good work life balance.'
    
//      },
//      {
//         img:"pic5.jpeg",
//         Name: 'mogan',
//         Destination: 'Frontend Developer',
//         Review: 'Great company culture'
    
//      }
    
//     ]


//  var data=0;


// let buttons = document.querySelectorAll("i");
// console.log(buttons);

// buttons.forEach((x,index) => {
//    x.addEventListener('click',() => {
//       if(index == 0){
//          if(data == 0){
//           data = arr.length-1
//          }
//          data--

//          face.src=arr[data].img;
//          personname.innerText=arr[data].Name;
//          Des.innerText=arr[data].Destination;
//          para1.innerText=arr[data].Review;
//       }
//       else {
//          data++
//          if(data > arr.length-1){
//           data=0;
//          }

//          face.src=arr[data].img;
//          personname.innerText=arr[data].Name;
//          Des.innerText=arr[data].Destination;
//          para1.innerText=arr[data].Review;
//       }
//    });
// });




