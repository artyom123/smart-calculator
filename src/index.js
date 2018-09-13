class SmartCalculator {
  constructor(initialValue) {
    this.arr = [initialValue];
    this.count = 0;
  }

  add(number) {
    this.addBrackets();
    this.arr.push('+');
    this.arr.push(number);
    return this;
  }
  
  subtract(number) {
    this.addBrackets();
    this.arr.push('-');
    this.arr.push(number);
    return this;
  }

  multiply(number) {
    this.addBrackets();
    this.arr.push('*');
    this.arr.push(number);
    return this;
  }

  devide(number) {
    this.addBrackets();
    this.arr.push('/');
    this.arr.push(number);
    return this;
  }

  pow(number) {
    this.arr.push(`Math.pow(${this.arr.pop()},`);
    this.arr.push(number);
    this.count++;
    return this;
  }
  
  toString(){
    this.addBrackets();
    return eval(this.arr.join(''));
  }

  addBrackets() {
    if(this.count > 0) {
      this.arr.push(')'.repeat(this.count));
      this.count = 0;
    }
  }
}

module.exports = SmartCalculator;
