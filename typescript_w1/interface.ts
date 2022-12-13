interface UserDetail{
    readonly _id:number
    email:string
    mobile:number
    googleId?:string
    startTrial():string//function
    trialUser:()=>string//another method for function
    getCoupon(couponName:string):number
}

const salmanFarisVS:UserDetail={
    _id:334,
    email:"sal@data.com",
    mobile:12121212,
    startTrial:()=>{
        return "trail started"
    },
    trialUser:()=>{
        return "trial expired"
    },
    getCoupon(coupon:"FLAT15") {
        return 1 
    }


}