
/* 
    pre-defining the type using 
    => type (var)
    same as the interface
*/
interface Guitarist {
    name?: string,
    active?: boolean,
    albums: (string | number)[] // union array type 
}