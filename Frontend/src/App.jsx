import Header from "./Compontent/Header"
import CardGrp from "./Compontent/CardGrp"
import {Routes,Route} from "react-router-dom";
import Show from "./Compontent/Show";
import NewListing from "./Compontent/NewListing";
import EditListing from "./Compontent/EditListing";


export default function App(){
  return(
    <>
      <Header/>
      <Routes>
        {/* <Route path='/listing' element={<AddBtn/>}/> */}
        <Route path='/listing' element={<CardGrp/>}/>
        <Route path='/listing/:id' element={<Show/>}/>
        <Route path='/listing/new' element={<NewListing/>}/>
        <Route path='/listing/:id/edit' element={<EditListing/>}/>
      </Routes>
    </>
  )
}