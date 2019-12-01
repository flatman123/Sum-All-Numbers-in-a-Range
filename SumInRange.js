function addUp(stopper,n){
      if (n === stopper){
            return n;
      }
      return n + addUp(stopper,n - 1);
};

function sumAll(callBack,arr) {
  let sortNum = arr.sort((a,b) => a - b);
  let getNum = sortNum[sortNum.length - 1];
  let getStopper = sortNum[0];
  let num = callBack.call(this,getStopper,getNum);

  return num;
};
