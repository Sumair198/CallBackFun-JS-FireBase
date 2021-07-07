// var sendData = () =>
// {
//     var obj = 
//     {
//         name : 'Sumair',
//         age : 22
//     }
//     firebase.database().ref('student').push(obj)
// }

// var getData = () =>
// {
//     firebase.database().ref('student').on('child_added',(data) =>
//     {
//         showData(data.val())
//     }
//     )
// }
// var showData = (a) =>
// {
//     console.log(a)
// }



// var getData = (showData) =>
// {
//     firebase.database().ref('student').on('child_added',(data) =>
//     {
//         // console.log(data.val())
//         showData(data.val())
//     })
// }

// var showData = (data) =>
// {
//     console.log(data)
// }

// getData(showData)



// var sendData = () =>
// {
//     var obj = 
//     {
//         name : 'sumair',
//         id : 9910
//     }
//     firebase.database().ref('student').push(obj)
// }
// var getData = () =>
// {
//     firebase.database().ref('student').on('child_added', (data) =>
//     {
//         console.log(data.val())
//     })
// }


let sendData = () => {
    let a = prompt("enter your name")
    let b = +prompt("enter your age")
    let c = prompt("enter your ID")
    let d = prompt("enter your Section")
    let obj = {
        name : a,
        age : b,
        ID : c,
        section : d
    }
    firebase.database().ref('student').push(obj)
}

var getData = (a) =>
{
    firebase.database().ref('student').on('child_added',(data) =>
    {
        showData(data.val())
    })
}

var showData = (a) =>
{
    console.log(a)
}


