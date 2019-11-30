

let cub1 =0;

function volumecup(cub){   


cub1 =  cub*cub*cub;
return cub1;

}
console.log(volumecup(5));

let arr = [ 'a','e','u','i','o' ];

function isAVowel(a){  
   let c=0;  
    var res = a.toLowerCase();  

while( c<arr.length ) {  
if(res==arr[c]){  
return true;

}  else{return false;}
c++;
} 

}
console.log(isAVowel("p"));

function getTwoLengths(res,r){  
 let re =res.length
 let rd = r.length   
 return [ re ,rd ];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


 //function getMultipleLengths( arr){  
 
     

//  }



 //console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


 function printLongestWord (arr){     
    let c=0;  
    let longest=arr[c].length;
      let long;    
        let maxlengh =0; 
     // let h =1;  
while(c<arr.length){  
     long=arr[c]; 
if(longest[c]>maxlengh.length){ 
     maxlengh=longest;
    longest=arr[c].length;

    long=arr[c];
 } 
     
 c++;

 }
 return long;
  
}  
   
 

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
function maxOfThree(num1,num2,num3){
   let i=0;
   let maxnumber =num1
while(i<3){
  if( maxnumber>num2 ){ 
  return maxnumber =num1; 
  }

  if (num2>maxnumber||num3){
  return maxnumber=num2;

} else{ return maxnumber=num3  ;        
   }
i++;
    
} 
}



console.log(maxOfThree(6, 9, 1));

function transmogrify (num1,num2,num3){
   let i=0;
   while(i<2){
   let x=num1*num2    
return   Math.pow(x, num3)

i++;

}
}




console.log(transmogrify(5, 3, 2));