// estas funciones son de ejemplo
export 
const filtroPokemon = (tipo, nombre) =>{
let filtroTipoPokemon = tipo.filter((x) => 
x.type.includes(nombre)
);
return filtroTipoPokemon;

};