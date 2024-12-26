import Cardinfo from "./Cardinfo";
const Card = () => {
    const people = [
        {
            "id": 1,
            "name": "Suraj",
            "age": 25,
            "country": "India"
        },
        {
            "id": 2,
            "name": "Badal",
            "age": 27,
            "country": "Nepal"
        },
        {
            "id": 3,
            "name": "Ashnu",
            "age": 23,
            "country": "Bhutan"
        },
        {
            "id": 4,
            "name": "Emily",
            "age": 30,
            "country": "USA"
        },
        {
            "id": 5,
            "name": "John",
            "age": 28,
            "country": "UK"
        },
        {
            "id": 6,
            "name": "Chen",
            "age": 22,
            "country": "China"
        },
        {
            "id": 7,
            "name": "Amina",
            "age": 29,
            "country": "Egypt"
        },
        {
            "id": 8,
            "name": "Liam",
            "age": 26,
            "country": "Canada"
        },
        {
            "id": 9,
            "name": "Olivia",
            "age": 24,
            "country": "Australia"
        },
        {
            "id": 10,
            "name": "Carlos",
            "age": 31,
            "country": "Mexico"
        }
    ];

    return (
        <>
            <h1 style={{textAlign:"center"}}>perons data</h1>
            {
                people.map((p) => {
                    return <Cardinfo key={p.id} data={p} />
                })
            }
        </>
    );
};

export default Card


{/* <>
<h1>Person Data</h1>
{people.map((item) => (
    <Cardinfo  key={item.id} data={item} />
))}
</> */}