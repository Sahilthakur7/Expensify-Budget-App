import * as firebase from 'firebase';

const config = {
        apiKey: "AIzaSyAVRINb1KfXEgkTKl6lT89Ja89tnTuXMhw",
        authDomain: "expensify-35cd4.firebaseapp.com",
        databaseURL: "https://expensify-35cd4.firebaseio.com",
        projectId: "expensify-35cd4",
        storageBucket: "expensify-35cd4.appspot.com",
        messagingSenderId: "347921571148"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Sahil Thakur',
    age: 22,
    isMarried: false,
    location: {
        state: 'HP',
        city: 'Shimla'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log(error);
});


const onValueChange = firebase.database().ref().on('value',(snapshot) => {
    const val = snapshot.val();
    console.log(val);
});

setTimeout(()=> {
    firebase.database().ref('age').set(23);
}, 3500);
// database.ref('isMarried').remove().then(() => {
//     console.log("Dataa was removed");
// }).catch((e) => {
//     console.log("Couldn't be removed");
// })
