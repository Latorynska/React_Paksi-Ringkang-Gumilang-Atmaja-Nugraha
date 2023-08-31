const tweets = [
    {
        author_id : 2244994945,
        username : "@programmerlog",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134912,
        edit_history_tweet_ids : "1228393702244134912",
        text : "What did the developer write in their Valentine’s card?\n  \nwhile(true) {\n    I = Love(You);  \n}"
    },
    {
        author_id : 2244994945,
        username : "@txtdarimantan",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134913,
        edit_history_tweet_ids : "1228393702244134912",
        text : "testt"
    },
    {
        author_id : 2244994945,
        username : "@txtdef",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134914,
        edit_history_tweet_ids : "1228393702244134912",
        text : "def text"
    }
];
const tweets_new = [
    {
        author_id : 2244994945,
        username : "@programmerlo1",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134912,
        edit_history_tweet_ids : "1228393702244134912",
        text : "What did the developer write in their Valentine’s card?\n  \nwhile(true) {\n    I = Love(You);  \n}"
    },
    {
        author_id : 2244994945,
        username : "@txtdarimantan2",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134913,
        edit_history_tweet_ids : "1228393702244134912",
        text : "testt"
    },
    {
        author_id : 2244994945,
        username : "@txtdef3",
        created_at : "2020-02-14T19:00:55.000Z",
        id : 1228393702244134914,
        edit_history_tweet_ids : "1228393702244134912",
        text : "def text"
    }
]

const new_tweet ={
    author_id : 2244994945,
    username : "@newUser",
    created_at : "2020-02-14T19:00:55.000Z",
    id : 1228393702244134914,
    edit_history_tweet_ids : "1228393702244134912",
    text : "def text"
}

function mergeTweets(arr1, arr2){
    arr3 = arr1.concat(arr2);
    console.log(arr3);
}
function addTweet(arr1,newObj){
    const arr3 = [...arr1];
    arr3.push(newObj);
    return arr3;
}

function getUsername(){
    let usernames = tweets.map((key, item) => {
        return key.username;
    });
    console.log(usernames);
}
// getUsername();
// mergeTweets(tweets, tweets_new);
console.log(addTweet(tweets,new_tweet));

// step by step looping array with .map()
// 1. buat variable baru dan assign array dengan map method nya
// 2. buat callback function untuk return hasil looping
// 3. panggil variable mappingnya