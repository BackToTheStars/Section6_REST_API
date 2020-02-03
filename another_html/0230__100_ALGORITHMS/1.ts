function add (x: any): number {
  return x.toString().split('').reduce((a:string, b:string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(add(45))