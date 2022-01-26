const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    //agrega usuario
    userController.add(user);
    //contiene al usuario osea si entro
    console.log(userController.getUsers());    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//digo a que le hare test
 test('findByEmail userController',()=>{
  //pongo un email 
  let email = 'hectoronja@gmail.com';
  //pongo un usurio con numer, nombre, email
  let user = new User(123123, 'Hector garcia ', email);
  //usamos la estructura.añadimos(usuario) 
  userController.add(user);
  //LoQueSeEsperaQsQue(En la estructura.Encontrarpor email(email)).queSeaigual(usuario) si es verdadero corre sin problemas
   expect(userController.findByEmail(email)).toEqual(user);
 })

 //
 test('findById userController',()=>{
  let id = 10;
  let user = new User(id,'Soldier 76', 'overwacth@gmail.com');
   userController.add(user);
   expect(userController.findById(id)).toEqual(user);
 });
