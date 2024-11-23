const friends = [
    {name: 'hasan', manya: 50},
    {name: 'jahid', manya: 150},
    {name: 'hossain', manya: 30},
    {name: 'mehmud', manya: 40},
    {name: 'hamid', manya: 50},
    {name: 'Sultan', manya: 50},
     ];

 const frd =  friends.reduce((sum, friend) => {
    console.log(sum, friend);
    return sum + friend.manya;
     
 }
    ,0) 
    

    const  fd = friends.reduce((num, fid) => num + fid. name ,0);
    console.log( ' '+ fd);

