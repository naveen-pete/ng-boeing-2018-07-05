class Customer {
  // id: number = 2;
  // name: string = 'krish';
  // phone: string = '12345';

  // id = 2;
  // name = 'krish';
  // phone = '12345';

  constructor(private id: number, public name: string, public phone: string) {
    // this.id = id;
    // this.name = name;
    // this.phone = phone;
  }

  showDetails(): void {
    console.log('Customer details:');
    console.log('  id:', this.id);
    console.log('  name:', this.name);
    console.log('  phone:', this.phone);
  }
}

const c = new Customer(10, 'ram', '12345');
// c.id = 101;
c.showDetails();
