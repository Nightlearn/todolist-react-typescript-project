
import React, { useState } from "react";
import Todo from "../../models/todo";
import MainRow from './mainRow';
import EditText from './editText';

interface Props {
    item: Todo,
    edit: (data: Todo, id: number) => void,
    remove: (id: number) => void,
}

const Row: React.FC<Props> = ({ item, remove, edit }) => {

    const [editState, seteditItem] = useState<boolean>(false);

    return (
        <div className="flex mb-4 items-center justify-between">
            {
                editState ?
                    <EditText item={item} seteditItem={seteditItem} edit={edit} /> :
                    <MainRow item={item} seteditItem={seteditItem} remove={remove} edit={edit} />
            }
        </div>
    )

}

export default Row;