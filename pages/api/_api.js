import data from "./data.json"

const getItem = (id) => {
  return data.data.items.filter(item => (item.id == id) ? item : null)
}
const getHerCategory = () => {
  return data.data.items.filter(item => (item.category == 'her') ? item : null)
}
const getHimCategory = () => {
  return data.data.items.filter(item => (item.category == 'him') ? item : null)
}
export {data, getItem, getHerCategory, getHimCategory};