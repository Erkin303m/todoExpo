const initalState = [
    { name: "Assalomu aleykum", edit: false },
    { name: "Hello world", edit: false },

];


const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD":
            let addData = [...state];
            addData.push({ name: action.payload, edit: false });
            return addData;

        case "DELET":
            let data = [...state];
            data.splice(action.payload, 1);
            return data;

        case "EDIT":
            let dataEdit = [...state];
            dataEdit[action.payload].edit = !dataEdit[action.payload].edit;
            return dataEdit

        case "SAVE":
            dataSave = [...state];
            dataSave.splice(action.payload.index, 1, { name: action.payload.editWord, edit: false });
            return dataSave

       



        default: return state
    }
}

export default Reducer