class Test {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(this.name);
  }
}
const test = new Test("jack");

foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
