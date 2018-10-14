//ex 1

const star =function(x) {
  while(x>0){
    return star(x-1)+"*";
  }
  x = x-1;
 	 return " ";
};
const space = function(y){
	if(y===0){
		return " ";
	}
	return space(y-1)+" ";
};

const triangleStars = function(a) {
	const loop =function(b){
	  while (b>0){
	    console.log(space(a-b)+star(2*b-1));
		loop(b-1);
        b=b-a;
      }
      return ;
};
  return loop(a);
};
const k = triangleStars(4);

//ex 2

const a = function ([[a,c,d],[b,e,f]]){
  return [[a,c,d]+[,b,e,f]];
}; 
const b = a([[1,2,3],[4,5,6]]);
console.log(b)

//ex3

  const findMinMax = function (a,b){
    if (b === true){
      return [a[2]];
    } else {
    return [a[0]];
    }
  }; 
  const a = findMinMax ([1,2,3],false);
  console.log(a);

//ex4

const forEach = function (a){
  let d = 0;
  let e = "";
    while(d<a.length){
     e=e+a[d]+"<br>";
     d=d+1;
    }
  	return e;
  };
  const z = forEach([1,2,3]);
  console.log(z);

//ex5

const sum = function (array){
	let length = array.length;
	let s = 0;
	while (length > 0){
		s = s + array[length-1];
		length = length - 1;
	}
	return s;
     };
console.log (sum([1,2,3,4]))

//ex6

  const reverse = function (arr){
  let ind = arr.length-1;
    while(ind>=0){
      console.log(arr[ind]);
    ind = ind - 1;
    }
  };
  reverse([1,2,3,4,5]);

 //ex7

function aaastx(ast1){
    let asttx = " ";
    while(ast1 > 0){
      asttx = asttx + "*";
      ast1--;
    }
    return asttx;
}

function probel(p1){
  let pr = "";
  while(p1 > 0){
    pr = pr + " ";
    p1--;
  }
  return pr;
}

 function checkerboard(ch){
  let t = 2;
  let f = 0; 
  while(f < ch){
    if(t%2===0){
      console.log(aaastx(ch));  
    }
    if(t%2===1){
      
    console.log(probel(1) + aaastx(ch));
    }
    t++;
    f++;
   }
 }
 checkerboard(5);
