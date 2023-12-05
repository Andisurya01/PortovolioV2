import HeaderProject from "./headerProject"
import Project from "./project"
import { useState } from "react"
import Modal from "../Modal"

const project = [
    {
        title: "Project 1",
        role: "Role : frontend developer",
        src: "gallery/gweh.jpg"
    },
    {
        title: "Project 2",
        role: "Role : frontend developer",
        src: "gweh2.jpg"
    },
    {
        title: "Project 3",
        role: "Role : frontend developer",
        src: "gweh3.jpg"
    },
    {
        title: "Project 4",
        role: "Role : frontend developer",
        src: "gweh4.jpg"
    },
    {
        title: "Project 5",
        role: "Role : frontend developer",
        src: "gweh5.jpg"
    }
]

const PageProject = () => {
    const [modal, setModal] = useState({ active: false, index: 0 })

    return (
        <>
            <HeaderProject></HeaderProject>
            <div>
                {
                    project.map((project, index) => {
                        return <Project index={index} title={project.title} role={project.role} setModal={setModal} key={index} />
                    })
                }
                <Modal modal={modal} projects={project}/>
            </div>
        </>
    )

}

export default PageProject