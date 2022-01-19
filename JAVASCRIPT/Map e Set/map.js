const usuarios = new Map();
usuarios.set('luiz',"Admin");
usuarios.set('Sthep',"Admin");
usuarios.set('Nátalia',"Admin");
usuarios.set('Gustavo',"user");

function getAdmins(map){
    let admins =[];
    for([key, value]of map){
        if(value === "Admin")
        admins.push(key)
    }
    return admins;
}
console.log(getAdmins(usuarios))


