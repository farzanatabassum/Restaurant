const filterItems=(foodCategory)=>{
    console.log(foodCategory)
    fetch('./menu.json')
    .then((response) => response.json())
    .then((data) => 
    {
        if(foodCategory==='all'){
            console.log(data)
            return data
            
        }
       
        let modifydata=data.filter((foodItem)=>{
        
        if(foodItem.category===foodCategory){
            return foodItem
        }
       
    })
    console.log(modifydata)
    return modifydata}
    )
}