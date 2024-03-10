// total record count - 12
// page's size - 2

// o/p 1 - 1, 2, 3, 4, 5, 6

// active page - 3 - 7, 8

const data = [
    {
        "id": "6",
        "name": "Kellie Crona",
        "email": "Chandler_Abernathy@yahoo.com"
    },
    {
        "id": "7",
        "name": "Carolina White",
        "email": "Royal50@hotmail.com"
    },
    {
        "id": "8",
        "name": "Alfredo Conn",
        "email": "Clarabelle34@hotmail.com"
    },
    {
        "id": "9",
        "name": "Stan Shanahan",
        "email": "Lamar.McClure@hotmail.com"
    },
    {
        "id": "10",
        "name": "Marvin Fay",
        "email": "Osbaldo58@hotmail.com"
    },
    {
        "id": "11",
        "name": "Torrance Rau",
        "email": "Orin45@gmail.com"
    },
    {
        "id": "12",
        "name": "Harold Gutmann MD",
        "email": "Alyce.Stracke37@yahoo.com"
    }
];

function pageConstruction(content, pageSize, activePage) {
    // [[1, 2], [3, 4], [5, 6]]
    var outterArr = [];
    content.forEach(eachContent => {
        
    });
};