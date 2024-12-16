/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const UsersComponent = () => {
    const users = ["John", "Jane", "Jack", "Jill", "James"];
    const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

      const timer = setTimeout(() => {
        const filtered = users.filter(user => user.toLowerCase().indexOf(search.toLowerCase()) > -1);
        setFilteredUsers(filtered);
      }, 400);

      return () => clearTimeout(timer);

    }, [search]);


    const handleSearch = (ev: any) => {
      const searchEl = ev.target as HTMLInputElement;
      setSearch(searchEl.value);
    }

    return (
      <div className="py-10 px-[5%]">
        <h2 className="text-xl text-center mb-8">Users</h2>
        
        <div className="mb-4">
          <input type="search" 
            placeholder="Search..."
            className="border rounded-md py-2 px-4 outline-none focus:border-secondary"
            value={search}
            onChange={handleSearch}
          />
        </div>

        <ul>
          {
            filteredUsers.map(user => (
              <li key={user} className='border p-2 mb-2'>{user}</li>
            ))
          }
        </ul>
      </div>
    )
}

export default UsersComponent;