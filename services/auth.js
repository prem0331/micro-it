
const sessionIdtousermap=new Map();
function setuser(id,user){
    sessionIdtousermap.set(id,user);

}
function getuser(id){
    sessionIdtousermap.get(id);
}
module.exports={
    setuser,
    getuser,
}