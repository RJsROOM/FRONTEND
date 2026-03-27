
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)


//ContextAPI is used for data centralisation. suppose if we want some data to be centralised it gives us two major benefits: we don't have to unnecessarily pass that data to all the components and we will be able to get our data from a single place, the props-drilling makes our work more confusing and the chances of occurring errors increase. the ContextAPI is an inbuilt functionality which is offered by react.
// the api calling is also very crucial part and calling API in every component is not preferrable for clear readabiity and understanding.