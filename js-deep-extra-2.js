function add(n, m){

  if(!m){
    return function (k){
      return k+n;
    }
  }
    return n+m;
}

function sub(n, m){

  if(!m){
    return function (k){
      return k-n;
    }
  }
  return n-m;
}

function mul(n, m){

  if(!m){
    return function (k){
      return k*n;
    }
  }
  return n*m;
}

function div(n, m){

  if(!m){
    return function (k){
      return k/n;
    }
  }
  return n/m;
}

function pipe() {
  let result;
  let args = arguments;

  return function(k) {
    result = k;
    for (let i = 0; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  }
}
////let add1 = sub(5);
//let res = add1(6);

let x = pipe(add(1), mul(2))(3);

console.log(x)