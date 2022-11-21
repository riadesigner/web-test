import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {

  input: 'src/app.js',
  output: {
    name:'App',
    file: 'dist/app.js',
    format: 'iife',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes'
    },
  },
  external: [
        'react',
        'react-dom'
  ], 
  plugins: [
      babel({
          exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs()        
  ] 
};