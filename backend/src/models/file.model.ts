export interface VirtualFile {
    uuid:string,
    name: string,
    pictureURL?: string,
    volume: string,
    createDate: string,
    owner: string,
    parrentNode?:string

    // PATH Implentation will be update
}
export interface Section {
  name: string;
}

/// .drive/ {doc [1] } / bootupFolder
