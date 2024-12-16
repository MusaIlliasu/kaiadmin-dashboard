/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

interface UserProps {
  id: number;
  name: string;
}

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    let timer: number;
    const fetchUsers = async () => {
    
      try {
        timer = setTimeout(() => {
          setLoading(false);
          setUsers([{ id: 1, name: "John" }, { id: 2, name: "Jane" }]);
        }, 5000);
        
      } catch (error: any) {
        console.log(error.message);
        setError("Something went wrong, try again later");
      }
    }

    fetchUsers();
    return () => clearTimeout(timer);

  }, []);
    
  return { loading, users, error};
}

export default useFetch;