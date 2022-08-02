

interface Props {
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}
const Search: React.FC<Props> = ({ setSearch }) => {


    const setStringHandler = (event: any) => {
        setSearch(event.target.value);
    }

    return (
        <div className="min-w-[300px]">
            <div className="relative mt-1" >
                <input type="text" name="search" id="search" placeholder="جستجو پروژه بر اساس نام ..." onChange={setStringHandler}
                    className="bg-white relative w-full border border-gray-300 rounded-md shadow pr-3 pl-10 py-2 text-right cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </input>
            </div>
        </div>
    )
}
export default Search;