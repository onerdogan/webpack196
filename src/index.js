import{setItem} from "./utils/storage";
import "./index.scss";
import "bootstrap";

document.getElementById("btnSayHallo").addEventListener("click",()=>{
    alert("hello webpack")
    setItem("token","oy7ry3-f3434t-34t334-3tt34t-t33t3");
})


