
import { useState } from "react";
import "./App.css";

function App() {

  // Student list
  const [data, setData] = useState([]);

  // Add student form
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [studentClass, setStudentClass] = useState("");

  // Search
  const [search, setSearch] = useState("");

  // Edit student
  const [editdata, setEditdata] = useState(null);

  const [editForm, setEditForm] = useState({
    name: "",
    roll: "",
    studentClass: ""
  });

  // ADD STUDENT
  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !roll.trim() || !studentClass.trim()) {
      alert("All fields are required");
      return;
    }

    const duplicate = data.some(
      (item) => item.roll.toLowerCase() === roll.trim().toLowerCase()
    );

    if (duplicate) {
      alert("Roll number already exists");
      return;
    }

    const newId = data.length === 0
      ? 1
      : Math.max(...data.map((item) => item.id)) + 1;

    const newStudent = {
      id: newId,
      name: name.trim(),
      roll: roll.trim(),
      studentClass: studentClass.trim()
    };

    setData([...data, newStudent]);

    setName("");
    setRoll("");
    setStudentClass("");
  }

  // EDIT STUDENT
  function editdataone(item) {
    setEditdata(item.id);

    setEditForm({
      name: item.name,
      roll: item.roll,
      studentClass: item.studentClass
    });
  }

  // SAVE EDIT
  function saveEdit(id) {

    if (
      !editForm.name.trim() ||
      !editForm.roll.trim() ||
      !editForm.studentClass.trim()
    ) {
      alert("All fields are required");
      return;
    }

    const duplicate = data.some(
      (item) =>
        item.roll.toLowerCase() === editForm.roll.trim().toLowerCase() &&
        item.id !== id
    );

    if (duplicate) {
      alert("Roll number already exists");
      return;
    }

    const updatedData = data.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          name: editForm.name.trim(),
          roll: editForm.roll.trim(),
          studentClass: editForm.studentClass.trim()
        };
      }

      return item;
    });

    setData(updatedData);
    setEditdata(null);
  }

  // CANCEL EDIT
  function cancelEdit() {
    setEditdata(null);
  }

  // DELETE STUDENT
  function deleteStudent(id) {
    setData(data.filter((item) => item.id !== id));

    if (editdata === id) {
      setEditdata(null);
    }
  }

  // SEARCH STUDENT
  const filterdata = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h1>Student List Management</h1>

      {/* ADD FORM */}

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Enter roll number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <input
          placeholder="Enter class"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
        />

        <button className="add-btn" type="submit">
          Add Student
        </button>

      </form>

      {/* SEARCH */}

      <input
        className="search-input"
        placeholder="Search student by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* STUDENT TABLE */}

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Class</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {filterdata.length === 0 ? (

              <tr>
                <td colSpan="6">No students found</td>
              </tr>

            ) : (
              filterdata.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  {editdata === item.id ? (

                    <>
                      <td>
                        <input
                          value={editForm.name}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              name: e.target.value
                            })
                          }
                        />
                      </td>

                      <td>
                        <input
                          value={editForm.roll}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              roll: e.target.value
                            })
                          }
                        />
                      </td>

                      <td>
                        <input
                          value={editForm.studentClass}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              studentClass: e.target.value
                            })
                          }
                        />
                      </td>

                      <td className="action-buttons">

                        <button
                          type="button"
                          className="sav"
                          onClick={() => saveEdit(item.id)}
                        >
                          Save
                        </button>

                        <button
                          type="button"
                          className="can"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </button>

                      </td>

                    </>

                  ) : (

                    <>
                      <td>{item.name}</td>
                      <td>{item.roll}</td>
                      <td>{item.studentClass}</td>

                      <td>
                        <button
                          type="button"
                          className="edit-btn"
                          onClick={() => editdataone(item)}
                        >
                          Edit
                        </button>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() => deleteStudent(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>

                  )}

                  {editdata === item.id && (
                    <td>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => deleteStudent(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </>
  );
}

export default App;
