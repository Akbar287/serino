/* eslint-disable import/no-anonymous-default-export */
const defaultClass = "px-4 h-10 rounded  focus:outline-none focus:ring-2 rounded-full"
const main = (props) => {
    return (
        <button onClick={props.onClick ?? props.onClick} title={props.title && props.title} className={`${props.className ? props.className : ''} bg-gradient-to-br text-white focus:outline-none`}>{props.children}</button>
    )
}
const toCart = (props) => {
  return (
    <button onClick={props.onClick ?? props.onClick} title={props.title && props.title} className={`${props.className ? props.className : ''} text-white hover:shadow-xl transition-shadow duration-500 ease-in-out focus:outline-none rounded-xl px-12 py-4`}>{props.children}</button>
)
}
const primary = (props) => {
    return (
        <button onClick={props.onClick ?? props.onClick} title={`${props.title && props.title}`} className={`${defaultClass} ${props.className && props.className}  focus:ring-blue-300 hover:from-blue-800 hover:to-blue-900`}>{props.children}</button>
    )
}
const danger = (props) => {
    return (
        <button onClick={props.onClick ?? props.onClick} title={`${props.title && props.title}`} className={`${defaultClass} ${props.className && props.className} from-red-600 to-red-500 focus:ring-red-300 hover:from-red-700 hover:to-red-600`}>{props.children}</button>
    )
}
const success = (props) => {
    return (
        <button onClick={props.onClick ?? props.onClick} title={`${props.title && props.title}`} className={`${defaultClass} ${props.className && props.className} from-green-600 to-green-500 focus:ring-green-300 hover:from-green-700 hover:to-green-600`}>{props.children}</button>
    )
}
const secondary = (props) => {
    return (
        <button onClick={props.onClick ?? props.onClick} title={`${props.title && props.title}`} className={`${defaultClass} ${props.className && props.className} from-gray-900 to-gray-800 focus:ring-gray-300 hover:from-gray-700 hover:to-gray-600`}>{props.children}</button>
    )
}

export default {main, primary, danger, success, secondary, toCart}