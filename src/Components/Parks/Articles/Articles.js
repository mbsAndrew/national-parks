import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../services/url';

const Articles = ({ parkID }) => {
    const [articles, setArticle] = useState(false);
    const [active, setActive] = useState([]);
    const [page, setPage] = useState(0);    

    useEffect(() => {                                  
        fetch(`${API_URL}/articles/${parkID}`)
            .then(res => res.json())
            .then(articles => {               
                const chunks = [];
                while (articles.data.data.length > 0) {
                    chunks.push(articles.data.data.splice(0, 5));
                }
                setArticle(chunks);                               
            })
    }, [parkID]);

    const readMore = () => {        
        setPage(prevState => {            
            return page + 1;
        });
    };

    const readLess = () => {
        setPage(prevState => {
            return page - 1;
        });
    }
    
    const getActiveArticles = () => {        
        console.log([...articles.filter((f, i) => i <= page).flat()]);
        return [...articles.filter((f, i) => i <= page).flat()];
    }   
    

    return (
        <section>
            <div className={"container"}>
                <h2 className={"section__header"}>
                    Articles
                </h2>
            </div>
        {articles && <div className={"article__container"}>
            {getActiveArticles().map((m, i) => {
                const isFeature = i % 3 === 0;
                return (
                    <a href={m.url} target={"_blank"}>
                        <div className={`article ${isFeature && "article_feature"}`}>
                            <img className={"article__image"} src={m.listingImage.url} alt={m.listingImage.altText} />
                            <div className={"article__body"}>
                                <h3 className={"article__title"}>{m.title}</h3>
                                <p className={"article__desc"}>
                                    {m.listingDescription}
                                </p>
                            </div>                            
                        </div>
                    </a>
                );
            })}
            <div className={"article__buttons"}>
                {page > 0 && <button type={"button"} className={"article__button"} onClick={readLess}>Read Less</button>}
                <button type={"button"} className={"article__button"} onClick={readMore}>
                        Read More
                </button>
            </div>            
        </div>
        }
        </section>
    );
};

export default React.memo(Articles);
