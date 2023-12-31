/* eslint-disable react/prop-types */
const FooterButton = ({title, link}) => {
    return (
        <button
            className="w-full border text-start p-5 rounded-xl border-black relative overflow-hidden group hover:text-white hover:duration-500">
            <a href={link} className="w-full  text-start p-5 rounded-xl bg-black border-black absolute -translate-x-5 group-hover:-translate-y-5 translate-y-12 duration-500 delay-100 ease-in-out text-white">{title}</a>
            {title}
        </button>
    )
}

export default FooterButton