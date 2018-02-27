class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.arr = [initialValue];
    this.result = 0;
    this.k = 2;
  }

  add(number) {
    this.arr.push('+');
    this.arr.push(number);
    return this;
  }
  
  subtract(number) {
    this.arr.push('-');
    this.arr.push(number);
    return this;
  }

  multiply(number) {
    this.arr.push('*');
    this.arr.push(number);
    return this;
  }

  devide(number) {
    this.arr.push('/');
    this.arr.push(number);
    return this;
  }

  pow(number) {
    let arrNum,
        str = this.arr.pop();

    if(typeof str === 'string'){
        arrNum = str.match(/(\d)+/g);
        str = str.slice(0,str.length - this.k );
        this.arr.push(str+'Math.pow('+arrNum[arrNum.length-1]+','+number+')' + ')'.repeat(this.k-1));
        this.k++;
    }
    else{ 
        this.arr.push('Math.pow('+str+', '+number+')');
        this.k = 2;
    }
    return this;
  }
  
  toString(){
    return eval(this.arr.join(''));
  }
}

module.exports = SmartCalculator;
