console.log('Starting app');

setTimeout(()=>{
  console.log('Inside of callback');
}, 2000);

setTimeout(()=>{
  console.log('Second Timeout');
}, 1000);

console.log('Finishing app');
