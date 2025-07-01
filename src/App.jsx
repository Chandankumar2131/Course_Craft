import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import Spinner from "./Component/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
export default function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[error,setError]= useState("");
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchdata() {
    setLoading(true);
    setError("");
    try {
      let res = await fetch(apiUrrl);
      let output = await res.json();
      setCourses(output.data);
    } catch (error) {
      setError("⚠️ Unable to load courses. Please try again later.");
      toast.error("Network Error");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  if(error){
    return(
      <h2 className="bg-red-100 text-red-700 font-semibold px-6 py-4 rounded-lg shadow-md border border-red-300 text-center w-full max-w-xl mx-auto">{error}</h2>
    )
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-600">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex-wrap  flex justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}
