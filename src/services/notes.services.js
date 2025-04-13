import axios from "axios";

export const getNotes = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const getNotebyID = (id) => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      const { data } = response;
      if (data) {
        const note = data.filter(data.id == -id);
        return note;
      }
    });
};

export const createNote = (newNote) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", newNote).then((response) => {
        const {data} = response;
        return data;
    })
};

export const updateNote = () => {};

export const deleteNote = () => {};
