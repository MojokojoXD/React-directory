import directory from '../data'

export let index = 0;
export let data = [...directory];


export default function directoryReducer(state, action) {

  const {edit,newContact} = action;
  
  switch (action.type) {
    case "Previous":
      if(index > 0)index -= 1;
      return {...state,...data[index]};
    case "Next":
        if(index < data.length - 1) index +=1;
      return {...state,...data[index]};
    case "Delete":{
        data = data.filter((c,i) => i !== index);
        if(index === 0){index = 0}
        else index--;
        dataSize = data.length
      return data.length !==0 ?{...state,...data[index]} : null
    }
    case "Edit":
      data = data.map(contact => {
        return (contact.id === edit.id)? edit : contact;
      })
      return {...state, ...data[index]}
    case "New":
      data.push({...newContact,id: data.length - 1})
      dataSize = data.length;
      return {...state, ...data[index]}
    default:
      throw new Error("Unidentified action");
  }
}

export let dataSize = data.length;
