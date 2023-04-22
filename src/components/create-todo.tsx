/* eslint-disable jsx-a11y/label-has-associated-control */
function CreateTodo() {
  return (
    <div className="p-4">
      <h1>Create Todo</h1>
      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500    "
            placeholder="type your todos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
