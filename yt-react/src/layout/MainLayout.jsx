import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";

function MainLayout() {
  return (
  <section id="main-layout">
    <Nav></Nav>
    <Sidebar></Sidebar>
    <Content></Content>
  </section>
  )
} 

export default MainLayout