let success = console.log;
let fail = console.error;

getName = () => Promise.resolve("John");
getName()
  .then( name => name.toUpperCase() )
  .then( success )
  .catch( fail );
