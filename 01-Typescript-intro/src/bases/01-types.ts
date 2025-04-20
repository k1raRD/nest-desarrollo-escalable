export let name: string = 'Alex';
export const age: number = 22;
export const isValid: boolean = true;

name = 'melissa';

console.log(name);

export const templateString = `Esto es un estring 
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}`;
console.log(templateString);