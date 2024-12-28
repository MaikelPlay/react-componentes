import './PageContent.css';

function PageContent(props) {
    return (
        <section id="page-content">
            {props.children}
        </section>
    );
}

export default PageContent;
