const SET_FOLLOW = 'SET_FOLLOW';

const initialState = {
    category: [
        {
            rusName: 'Спорт',
            pathName: 'sport',
            isFollow: false
        },
        {
            rusName: 'Образование',
            pathName: 'education',
            isFollow: false
        },
        {
            rusName: 'Технологии',
            pathName: 'tex',
            isFollow: false
        },
        {
            rusName: 'Туризм',
            pathName: 'tourism',
            isFollow: false
        },
        {
            rusName: 'Культура',
            pathName: 'culture',
            isFollow: false
        },
        {
            rusName: 'Экономика',
            pathName: 'economy',
            isFollow: false
        }


]
}


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_FOLLOW:
            return {
                ...state,
                navbar: state.category.map((el)=>{if(el.pathName === action.obj.pathName) return action.obj; return el; })
            }
        default:
            return state;
    }
}

export const changeFollow = (obj) =>{
    return {
        type: SET_FOLLOW,
        obj: obj,
    }
}

export default headerReducer;
