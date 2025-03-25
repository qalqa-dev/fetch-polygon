let acc = 1;
console.log('Call 1:', acc);

acc++;
console.log('Call 2:', acc);

setTimeout(() => {
  acc++;
  console.log('Call 3:', acc);
});

let anotherAcc = acc;

console.log('Call 4:', anotherAcc, acc);
//1243

//Синхроннные макро и микро таски

console.log('Step 1: In global scope');

setTimeout(() => console.log('Step 2: In setTimeout'));

new Promise((resolve) => {
  console.log('Step 3: In Promise');
  resolve();
}).then(() => {
  console.log('Step 4: In Promise.then');
});

setTimeout(() => {
  console.log('Step 5: In setTimeout');
});
//13425

//Два Then

console.log('Step 1: In global scope');

setTimeout(() => console.log('Step 2: In setTimeout'));

new Promise((resolve) => {
  console.log('Step 3: In Promise');
  resolve();
})
  .then(() => {
    console.log('Step 4: In Promise.then');
  })
  .then(() => {
    console.log('Step 5: In Promise.then.then');
  });

setTimeout(() => {
  console.log('Step 6: In setTimeout');
});
//134526

//Два Promise с 2 then

console.log('Step 1: In global scope');

setTimeout(() => console.log('Step 2: In setTimeout'));

new Promise((resolve) => {
  console.log('Step 3: In Promise');
  resolve();
})
  .then(() => {
    console.log('Step 4: In Promise.then');
  })
  .then(() => {
    console.log('Step 5: In Promise.then.then');
  });

setTimeout(() => {
  console.log('Step 6: In setTimeout');
}, 0);

new Promise((resolve) => {
  console.log('Step 7: In Promise');
  resolve();
})
  .then(() => {
    console.log('Step 8: In Promise.then');
  })
  .then(() => {
    console.log('Step 9: In Promise.then.then');
  });
//137485926

//макро внутри микро

console.log('Step 1: In global scope');

setTimeout(() => console.log('Step 2: In setTimeout'));

new Promise((resolve) => {
  console.log('Step 3: In Promise');
  resolve();
}).then(() => {
  console.log('Step 4: In Promise.then');
  setTimeout(() => {
    console.log('Step 5: In setTimeout in then');
  });
});

//13425

//микро внутри макро

console.log('Step 1: In global scope');
setTimeout(() => {
  new Promise((resolve) => {
    console.log('Step 2: In Promise in setTimeout');
    resolve();
  }).then(() => {
    console.log('Step 3: In Promise.then in setTimeout');
  });
});

new Promise((resolve) => {
  console.log('Step 4: In Promise');
  resolve();
}).then(() => {
  console.log('Step 5: In Promise.then');
});

setTimeout(() => {
  console.log('Step 6: In setTimeout');
});

//145236
