const filterItems=(foodCategory)=>{
    fetch('./menu.json')
    .then((response) => response.json())
    .then((data) => 
    {
        let modifydata=data.filter((foodItem)=>{
        
        if(foodItem.category===foodCategory){
            return foodItem
        }
       
    })
    return modifydata}
    )
}