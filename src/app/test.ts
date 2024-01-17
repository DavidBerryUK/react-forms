class PersonBuilderBase<T extends PersonBuilderBase<T>> {
  protected person: { [key: string]: any } = {};

  setSurname(surname: string): T {
    this.person.surname = surname;
    return this as any as T;
  }

  setForename(forename: string): T {
    this.person.forename = forename;
    return this as any as T;
  }

  setAge(age: number): T {
    this.person.age = age;
    return this as any as T;
  }

  build(): { [key: string]: any } {
    return this.person;
  }
}

class StaffBuilder extends PersonBuilderBase<StaffBuilder> {
  // Additional methods specific to StaffBuilder can be added here
}

class PublicBuilder extends PersonBuilderBase<PublicBuilder> {
  setMembershipNo(membershipNo: string): PublicBuilder {
    this.person.membershipNo = membershipNo;
    return this;
  }
  // Additional methods specific to PublicBuilder can be added here
}

// Example usage:
const staffPerson = new StaffBuilder().setSurname("Doe").setForename("John").setAge(30).build();

const publicPerson = new PublicBuilder()
  .setSurname("Smith")
  .setForename("Jane")
  .setAge(25)
  .setMembershipNo("12345") // Specific method for PublicBuilder
  .build();

console.log(staffPerson);
console.log(publicPerson);
