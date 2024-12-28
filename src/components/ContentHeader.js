function ContentHeader(props) {
    return (
        <div className="wrapper-header row">
        <div className="col-12">
            {props.children}
        </div>
      </div>
    );   
}

export default ContentHeader;