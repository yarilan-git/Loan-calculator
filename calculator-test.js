
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount : 2000, years : 5 , rate : 2 })).toBeCloseTo(35.06, 2)
});

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount : 100, years : 0.083 , rate : 1 })).toBeCloseTo(100.49, 2)
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount : 1000, years : 3 , rate : 2 })).toBeCloseTo(28.64, 2)
});

it("should return 0.00 if the amount is zero", function() {
  expect(calculateMonthlyPayment({amount : 0, years : 3 , rate : 2 })).toBe('0.00')
});

it("should return 0.00 if the rate is zero", function() {
  expect(calculateMonthlyPayment({amount : 1000, years : 3 , rate : 0 })).toBe('0.00')
});

it("should return 0.00 if the years field is zero", function() {
  expect(calculateMonthlyPayment({amount : 1000, years : 0 , rate : 3 })).toBe('0.00')
});

it("should return 0.00 if the years field is not a number", function() {
  expect(calculateMonthlyPayment({amount : 1000, years : 'Some text' , rate : 3 })).toBe('0.00')
});

it("should return 0.00 if the amount field is not a number", function() {
  expect(calculateMonthlyPayment({amount : 'Some text', years : 5 , rate : 3 })).toBe('0.00')
});

it("should return 0.00 if the rate field is not a number", function() {
  expect(calculateMonthlyPayment({amount : 1000, years : 4 , rate : 'Some text' })).toBe('0.00')
});





