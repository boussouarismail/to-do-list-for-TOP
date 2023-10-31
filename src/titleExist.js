export default function titleExist(title,mainList) {
    for (let i=0 ;i<mainList.length ;i++){
        if(mainList[i].title == title){
            return true;
        }
    }
    return false;
} 