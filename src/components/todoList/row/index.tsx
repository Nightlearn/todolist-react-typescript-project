
import React, { useState } from "react";
import Todo from "../../models/todo";
import MainRow from './mainRow';
import EditText from './editText';

interface Props {
    item: Todo,
}

const Row: React.FC<Props> = ({ item }) => {
    const [editState, seteditItem] = useState<boolean>(false);
    return (<>{editState ? <EditText item={item} seteditItem={seteditItem} /> : <MainRow item={item} seteditItem={seteditItem} />}</>)
}

export default Row;