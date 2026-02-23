let ListReindering = () => {
  const numbers = [10, 20, 33, 64, 22, 63];
//   const student = ["Hari", "Sita", "Laxman", "Ram"];
  let person = [
    { name: "Hari Prasad", age: 45, address: "ktm" },
    { name: "Ram Prasad", age: 67, address: "bkt" },
    { name: "Laxman Prasad", age: 23, address: "chitwan" },
  ];
  let student = [
    {
        fullName: "Bibek Shrestha",
        marks: {
            c: 90,
            english: 56,
            math: 45,
        },
        address: ["KTM", "Bkt", "Jhapa"]
    },
    {
        fullName: "Ganga Shrestha",
        marks: {
            c: 90,
            english: 56,
            math: 45,
        },
        address: ["KTM", "Bkt", "Jhapa"]
    },
    {
        fullName: "Rabi Shrestha",
        marks: {
            c: 90,
            english: 56,
            math: 45,
        },
        address: ["KTM", "Bkt", "Jhapa"]
    },
    {
        fullName: "Jamuna Shrestha",
        marks: {
            c: 90,
            english: 56,
            math: 45,
        },
        address: ["KTM", "Bkt", "Jhapa"]
    },
    {
        fullName: "Unknown Shrestha",
        marks: {
            c: 90,
            english: 56,
            math: 45,
        },
        address: ["KTM", "Bkt", "Jhapa"]
    }

  ];
  return (
    <div>
      <h3>List Reindering</h3>
      {numbers.map((ele, index) => {
        return (
          <div key={index}>
            <b>
              Index: {index}, Element: {ele}{" "}
            </b>
          </div>
        );
      })}

      {/* {student.map((ele, index) => {
        return (
          <div key={index}>
            <h4>
              Index: {index}, Element: {ele}{" "}
            </h4>
          </div>
        );
      })} */}

      <ol>
        {person.map(({ name, age, address }, ind) => (
          <li className="person-card" key={`${name}-${ind}`}>
            <h3>{name}</h3>
            <p className="age">
              <strong>Age:</strong> {age}
            </p>
            <p className="address">
              <strong>Address:</strong> {address}
            </p>
          </li>
        ))}
      </ol>

      <ol>
    {student.map(
        (userr => {
            return(
                <li>
                    Name: {userr.fullName}
                    Address: 

                </li>
            )
        }
    ))}
      </ol>
    </div>
  );
};

export default ListReindering;
