import { useParams } from "react-router-dom";

const Article = ({ newsData }) => {

    const { id } = useParams();

    return (
        <>
            <hr />
            <div className="container">
                {newsData.filter((eachArticle) => eachArticle.fields.headline === id).map(eachArticle => (<div key={eachArticle.id}>
                    <img src={eachArticle.fields.thumbnail} alt="" className="img-fluid" />
                    <div className="container">
                        <a href={eachArticle.webUrl} target="_blank" rel="noreferrer">
                            <h2 className="container"> {eachArticle.fields.headline}</h2>
                        </a>
                        <p id="article" className="container">
                            {eachArticle.fields.bodyText}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
};

export default Article;