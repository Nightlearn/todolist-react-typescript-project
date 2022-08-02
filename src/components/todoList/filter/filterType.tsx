import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const people = [
    { name: 'فیلتر بر اساس نوع todo', index: 0 },
    { name: 'انجام شده', index: 1 },
    { name: 'انجام نشده', index: 2 }
]

interface Props {
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>,
}

const FilterType: React.FC<Props> = ({ setSelectedIndex }) => {

    const [selected, setSelected] = useState(people[0])

    const setSelectedHandler = (event: any) => {
        setSelected(people[event.index]);
        setSelectedIndex(event.index);
    }

    return (
        <div className="min-w-[300px]">
            <Listbox value={selected} onChange={setSelectedHandler}>
                <div className="relative mt-1" >
                    <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow pr-3 pl-10 py-2 text-right cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4">
                                    </path>
                                </svg>
                            </span>
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 
                                                ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'}`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                            >{person.name}</span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default FilterType;
