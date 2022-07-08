function deleteData(){
    let result=confirm("Are you sure you want to delete this data?");
    if(result){
        return true;
    }else{
        return false;
    }
}