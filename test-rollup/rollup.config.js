// import resolve from '@rollup/plugin-node-resolve';
// import babel from '@rollup/plugin-babel';

export default {

  input: 'src/app.js',
  output: {
    name:'App',
    file: 'dist/app.js',
    format: 'iife',
    // plugins: [
    //     babel({
    //         exclude: 'node_modules/**'
    //     })
    // ]
  }
// All the used libs needs to be here
  // external: [
  //   'react', 
  //   'react-proptypes'
  // ],
  // plugins: [
  //   resolve(),
  //   babel({
  //     exclude: 'node_modules/**'
  //   })
  // ]  
};