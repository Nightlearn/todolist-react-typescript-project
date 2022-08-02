
import React from "react";
import FilterType from "./filterType";
import Search from "./search";

interface Props {
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>,
    setSearch:  React.Dispatch<React.SetStateAction<string>>
}

const Filter: React.FC<Props> = ({ setSelectedIndex , setSearch }) => {

    


    return (
        <div className=" flex items-center justify-center">
            <div className="p-1 m-2 w-full lg:w-2/4 md:flex">
                <div className="  md:ml-2">
                    <Search setSearch={setSearch}/>
                </div>
                <div>
                    <FilterType setSelectedIndex={setSelectedIndex} />
                </div>
            </div>
        </div>
    )
}

export default Filter;
