import useFetch from "./useFetch";

const DataFetching = () => {
    const {loading, users, error} = useFetch();

    console.log({loading, users});

  return (
    <div className="w-full py-10 px-[5%]">
        <h2 className="text-xl text-center mb-8">Users</h2>

        {loading ? <div className="w-[80px] h-[80px] rounded-full border-4 border-blue-600 border-b-transparent animate-spin my-10 mx-auto"></div> : null}
        {error ? <p className="text-center text-red-400">{error}</p> : null}
        {
            !error && users.length ? (
                <ul>
                    {
                        users.map(user => (
                            <li key={user.id} className="border mb-2">Name: {user.name} Id:{user.id} </li>
                        ))
                    }
                </ul>
            ) : null
        }
    </div>
  )
}

export default DataFetching;