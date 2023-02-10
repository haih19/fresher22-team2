export const leaderBoardData =[
    {   
        id: 1,
        name: 'rqphqel',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    },  
    {   
        id:2,
        name: 'dshfkj',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id:3,
        name: 'hffh',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id:4,
        name: 'jhurs',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id:5,
        name: 'ooykh',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id:6,
        name: 'lhkyj',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id: 7,
        name: 'puoj',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id: 8,
        name: 'cnvbjb',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id: 9,
        name: 'ptyjo',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }, 
    {
        id: 10,
        name: 'tgerb',
        allTime: Math.floor(Math.random()*100000),
        thisWeed: Math.floor(Math.random()*10000)
    }

    
]

export const findMax = (arr) =>{
    arr.sort(function(a,b){
        return b-a;
    })
    return arr[0];
}


export const splitText = (text) =>{
     return text.trim().charAt(0)
}