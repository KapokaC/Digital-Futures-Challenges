import { NavLink } from "react-router-dom";

const Article = ({ headline, image }) => {

    return (
        <>

            <section className="eachNews" id="eachNews">
                <ul>
                    <li>
                        <figure>
                            <img src={image} alt="" className="" />
                        </figure>
                        <h3>{headline}</h3>
                        <NavLink to={`/${headline}`}> View Article</NavLink>
                    </li>
                </ul>
            </section>

        </>

    )
}

export default Article;
