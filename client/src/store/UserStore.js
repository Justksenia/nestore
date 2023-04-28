import { makeAutoObservable, runInAction } from "mobx";
import { $hostAuth } from "../http";



export default class UserStore{
    fetchBasket=(id)=>$hostAuth.get(`api/user/${id}/basket`)
    addToBasket=(userId,deviceId)=>$hostAuth.post(`api/user/${userId}/basket`,{userId,deviceId})
    constructor(){
        this._isAuth=false;
        this._isAdmin=false;
        this._user={};
        this._basket=[]
        makeAutoObservable(this);
    }
    setIsAuth(bool) {
        this._isAuth=bool;
    }
    setUser(user) {
        this._user=user;
    }
    setAdmin(bool) {
        this._isAdmin=bool;
        this._isAuth=false;
      
    }
    async getBasket (id) {
        const {data}=await this.fetchBasket(id)
        runInAction(()=>this._basket=data)
    }
    async setBasket (userId,deviceId) {
        const {data}=await this.addToBasket(userId,deviceId)
        runInAction(()=>this._basket.push(data))
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get isAdmin() {
        return this._isAdmin
    }

  

    get basket () {
        return this._basket
    }
}