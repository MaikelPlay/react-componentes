import './SectionHeader.css';

function SectionHeader(props) {
    return (
        <header className="section-header">
            <h2>{props.title}</h2>
        </header>
    );
}

export default SectionHeader;