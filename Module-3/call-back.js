// // callback
// function pakhiBhai(callMeBack, patro, patri) {
//     console.log('value of patro', patro)
//     console.log('callMebAck parameter', callMeBack)
//     if (patri) {
//         // console.log(callMeBack)
//         callMeBack(patro)
//     }
//     // else {
//     //     console.log('tor kopale biya nai')
//     // }
// }

// function callSomeOne(person) {
//     console.log('calling', person)
// }

// // callSomeOne('jodu')
// pakhiBhai(callSomeOne, 'jodu', 'modu')













function bkcd(a,b,c)
{
    console.log("this is A value",a);
    if(a)
    {
        a("i am coming bro");
    }
    console.log("this is B value",b);
    console.log("this is C value",c);
}

function callbacking(vodro)
{
    console.log("I am the jhamela");
}

bkcd(callbacking,"return A","return B");