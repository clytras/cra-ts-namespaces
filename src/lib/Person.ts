export namespace People {

  export class Person {
    constructor(
      private firstName: string,
      private lastName: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    hello(): void {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
  }

}
