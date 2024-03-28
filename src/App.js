import "./App.css";
import TodoList from "./COMPONENTS/todo-list/TodoList";

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <h1>TODO CRUD</h1>
        <div className="todo__container">
          <div className="todo__input">
            <input
              type="text"
              placeholder="add toto..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleOnEnter}
            />
            <button type="button" onClick={handleAddTodo}>
              Add
            </button>
          </div>
          <ul
            style={{
              listStyle: "none",
              textAlign: "left",
              padding: "5px",
              marginBottom: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              justifyContent: "flex-start",
            }}
          >
            {todoItems &&
              todoItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      padding: "5px",
                      marginBottom: "5px",
                      backgroundColor: "lightsalmon",
                      border: "1px solid white",
                    }}
                  >
                    {isEdit ? (
                      <div>
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleOnEnter}
                        />
                        <button onClick={handleAddTodo}>Save Changes</button>
                      </div>
                    ) : (
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {item}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginRight: "5px",
                          }}
                        >
                          <button onClick={() => handleEditTodo(index)}>
                            edit
                          </button>
                          <button onClick={() => handleDeleteTodo(index)}>
                            delete
                          </button>
                        </div>
                      </span>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </header> */}
      <TodoList />
    </div>
  );
}

export default App;
