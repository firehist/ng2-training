export interface IUserAdress {
  street:string
  suite:string
}
export interface IUser {
  id:number
  username:string
  email:string
  adress:UserAdress
}
