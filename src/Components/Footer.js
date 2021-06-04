import React from 'react';

const List = ({ children }) => {
    return <ul className={"footer__list"}>{children}</ul>
};

const ListItem = ({ children, isTitle}) => {
    return <li className={`footer__list__item ${isTitle && "footer__list__item_title"}`}>
        {children}
    </li>
}

const Link = ({ link, text }) => {
    return <a className={"footer__link"} href={link} target={"_blank"}>{text}</a>;
}

const Footer = () => {
    return (
        <footer className={"footer__section"}>
            <div className={"footer__container"}>
                <List>
                    <ListItem isTitle>
                        Tools Used
                    </ListItem>
                    <ListItem>
                        <Link link={"https://www.nps.gov/subjects/developer/api-documentation.htm#/"} text={"National Parks API"} />
                    </ListItem>
                    <ListItem>
                        <Link link={"https://unsplash.com/documentation"} text={"Unsplash API"} />
                    </ListItem>
                </List>
                <List>
                    <ListItem isTitle>
                        How to contact me
                    </ListItem>
                    <ListItem>
                        <Link link={"https://github.com/mbsAndrew/national-parks"} text={"Github"} />
                    </ListItem>
                    <ListItem>
                        <Link link={"mailto:andrew89hansen@gmail.com"} text={"Email"} />
                    </ListItem>
                    <ListItem>
                        <Link link={"https://www.linkedin.com/in/andrew-hansen-91a42867/"} text={"LinkedIn"} />
                    </ListItem>
                </List>
            </div>
        </footer>
    );
};

Footer.List = List; 
Footer.ListItem = ListItem;
Footer.Link = Link;

export default Footer;
