import "./single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Singlepost from "../../components/Singlepost/Singlepost";

export default function Single() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
}
