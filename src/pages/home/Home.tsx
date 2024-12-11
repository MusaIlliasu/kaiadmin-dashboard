import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-extrabold text-2xl md:text-5xl mb-6">Kaiadmin</h1>
        <Link to="/dashboard" className="inline-block bg-secondary text-white rounded-md py-2 px-6">Dashboard</Link>
      </div>  
    </div>
  )
}

export default Home