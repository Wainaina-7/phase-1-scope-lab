// Write your solution in this file!
// Declare a global variable customerName and assign it the value 'bob'
var customerName = 'bob';

// Function that uppercases the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a global variable bestCustomer and assigns it 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function that overwrites the bestCustomer global variable
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare a constant leastFavoriteCustomer and assign it some value
const leastFavoriteCustomer = 'John';

// Function that tries to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // This will throw an error because you can't reassign a constant
  leastFavoriteCustomer = 'Jane'; // This line will throw the error
}

// Test suite
describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      expect(window.customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      expect(window.customerName).to.equal('bob');

      upperCaseCustomerName();

      expect(window.customerName).to.equal('BOB');
    });
  });

  describe('setBestCustomer()', function() {
    it('sets the bestCustomer variable', function() {
      expect(window.bestCustomer).to.equal(undefined);

      setBestCustomer();

      expect(window.bestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', function() {
    it('overwrites the bestCustomer', function() {
      overwriteBestCustomer('maybe bob');

      expect(window.bestCustomer).to.equal('maybe bob');
    });
  });

  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });
});
