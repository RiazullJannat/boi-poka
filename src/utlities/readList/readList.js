function getReadList(){
    const readList= localStorage.getItem('read-list');
    if(readList){
        const storedList = JSON.parse(readList);
        return storedList;
    }
    else{
        return [];
    }
}

function addReadList(bookId){
    const List = getReadList();
    if(List.includes(bookId)){
        console.log("book already added.")
    } 
    else{
        List.push(bookId);
        const strReadList = JSON.stringify(List);
        localStorage.setItem('read-list', strReadList);
    }

}
export {addReadList}