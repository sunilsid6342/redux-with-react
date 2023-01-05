const initialState = [
    {
        id: 0,
        name: "Raman Sharma",
        number: 1234567890,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        name: "Aman Panday",
        number: 1234567890456,
        email: "abcdef@gmail.com"
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state
        case "UPDAtE_CONTACT":
            const updatecurrent = state.map((item) =>
                item.id === action.payload.id ? action.payload : item)
                state=updatecurrent
                return state
        case "DELETE_CONTACT":
            const deltecontact=state.filter((item)=>item.id!==action.payload && item)
            state=deltecontact
            return state;
        default:
            return state;
    }
}

export default contactReducer;