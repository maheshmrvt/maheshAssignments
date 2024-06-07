const userProfile ={};
Object.defineProperty(userProfile, 'dateOfBirth', {
    value: '1990-01-01',
    writable: false,
    configurable: true,
    enumerable: true 
  });
userProfile.email = 'sumalatha@gmail.com';

console.log(userProfile);

userProfile.dateOfBirth = '1-1-1995';
userProfile.email = 'test@gmail.com';

console.log(userProfile);


delete userProfile.dateOfBirth;
delete userProfile.email;
console.log(userProfile);