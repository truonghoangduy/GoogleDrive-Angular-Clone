export interface BinInfo{
    moveFrom:string,
    fileName:string,
    name:string
    time?:any,
    binPath:string
    info?:any,
    isFolder:boolean
}
export interface BinModel{
    files?:Array<Array<BinInfo>>;
    folders?:Array<Array<BinInfo>>;
  }