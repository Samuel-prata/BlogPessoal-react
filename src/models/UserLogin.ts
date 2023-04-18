interface UserLogin{
    id: number;
    email:String;
    password:String;
    photo: String|null;
    token?: String|null;
}

export default UserLogin;