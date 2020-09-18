export interface BinInfo{
    moveFrom:string,
    fileName:string,
    time?:any,
    binPath:string,
    isFolder?:boolean,
    name?:string
}
export interface RestoreOperation{
    pathToBin:string,
    pathToResotre:string
}