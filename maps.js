function getAdmin(map){
    let admins = [];
for([key, value] of map){

    if(value === 'Admin'){

admins.push(key);

    }
}
return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('TETE', 'Admin');
usuarios.set('JORGE', 'Admin');
usuarios.set('Natalia', 'User');

console.log(getAdmin(usuarios));
