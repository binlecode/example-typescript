
/*
 * Javascript the falsy values:
 * - false 
 * - null
 * - undefined
 * - The empty string ''
 * - The number 0
 * - The number NaN
 */

// The == and != operators do type coercion before comparing. 
// This is bad because it causes ' \f\r \n\t ' == 0 to be true. This can mask type errors.
// When comparing to any of the following values, always use the === or !== operators, 
// which do not do type coercion: 0 '' undefined null false true


