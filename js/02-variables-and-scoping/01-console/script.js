console.log(20, 'Hello', true);

console.error('Alert');
console.warn('Warning');
console.table({
    name: 'Tutku',
    email: 'tutku@tutku.com'
});

console.group('simple');
console.log('10');
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);