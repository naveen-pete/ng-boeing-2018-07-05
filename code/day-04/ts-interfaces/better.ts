interface CommonFeatures {
  Id: number;

  name: string;

  getAll();
  create();
}

class Customer implements CommonFeatures {
  private id: number;
  name: string;
  phone: string;

  get Id() {
    return this.id;
  }

  set Id(val: number) {
    this.id = val;
  }

  getAll() {}

  create() {}
}

class Product implements CommonFeatures {
  id: number;
  name: string;
  description: string;

  get Id() {
    return this.id;
  }

  getAll() {}

  create() {}
}

const c = new Customer();
c.Id = 200;

console.log(c.Id);
