import "./drags.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Drag from "../../components/Drag/DnDFlow";

const Drags = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Drag/>
      </div>
    </div>
  )
}

export default Drags