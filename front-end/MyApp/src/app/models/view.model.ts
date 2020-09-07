export interface ViewCurrentFolder{
    files:Array<String>,
    folders:Array<String>,
    requestPath:string
}

export interface BreadCrumbState{
    choosenPathIndex:number,
    choosenPath:ViewCurrentFolder
}