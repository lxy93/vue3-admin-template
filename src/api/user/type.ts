//登录接口需携带的参数类型
export interface loginForm {
    username: string;
    password: string;
}

//登录后返回的数据类型
export interface loginReaponeseData {
    code: number;
    data: DataType;
}
interface DataType {
    token?: string;
    message?: string
}

//定义服务器返回用户信息类型
export interface userReaponeseData {
    code: number;
    data: user;
}
interface user {
    checkUser: userInfo
}
interface userInfo {
    userId: number;
	avatar: string;
	username: string;
	password: string;
	desc: string;
	roles: string[];
	buttons: string[];
	routes: string[];
	token: string;
}
