
import Article from "./Article";

const Headlines = ({ newsData }) => {

    return (
        <>
            <div>
                <div className="eachNews1">
                    {newsData.map((eachArticle, index) => (
                        <div key={index} className="container">
                            <Article image={eachArticle.fields.thumbnail} headline={eachArticle.webTitle} />
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}


export default Headlines;
