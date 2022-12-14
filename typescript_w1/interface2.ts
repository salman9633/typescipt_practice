interface takePhoto{
    cameraMode:string
    filter:string
    sound:boolean
}

interface Shorts{
    createShorts():void//we can give any return type here
}

class Instagram implements takePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public sound:boolean
    ){

    }
}

class Facebook implements takePhoto{
    constructor(//implemnt aakanel interfacil ulla ella propertisum ivade mention aakanm we can add more can't remove 
        public cameraMode:string,
        public filter:string,
        public sound:boolean,
        public shutter:number
    ){}
}

class Youtube implements takePhoto,Shorts{
    constructor(
        public cameraMode:string,
        public filter:string,
        public sound:boolean, 
        ){}
        createShorts():void{
        console.log("shorts");
    }
}