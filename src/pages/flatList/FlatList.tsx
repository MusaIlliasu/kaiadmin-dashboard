import { useEffect, useRef, useState } from "react";

const FlatList = () => {
    const [data, setData] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const generateData = () => {
            const len = 100;
            let i = 1;
            const dataArray: number[] = [];
            for(i; i <= len; i++){
                dataArray.push(i);
            }
            setData(dataArray);
            setLoading(false);
        }

        generateData();
        
    }, []);

    useEffect(() => {

        if(ref.current){
            (ref.current as HTMLDivElement).addEventListener("scroll", () => {
                // console.log(ref.current.scrollTop);
                
            });
        }
        
    }, [ref]);
    
    return (
        <div className="py-10 px-[5%]">
            <h2 className="text-xl text-center mb-8">Flat List</h2>
            {loading ? <p>Loading...</p> : null}
            {
                !loading ? (
                    <div ref={ref} className="w-full h-[500px] overflow-y-auto border p-2">
                        {
                            data.slice(0, 20).map((num) => (
                                <li key={num} className="border mb-2">{num}</li>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default FlatList;