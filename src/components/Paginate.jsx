const Paginate = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-center border-0">
        {pageNumbers.map((num) => {
          let classes = "page-item";
          if (num === props.currentPage) {
            classes = "page-item active";
          }
          return (
            <li className={classes}>
              <a
                onClick={() => props.pageSelected(num)}
                href="!#"
                className="page-link"
              >
                {num}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;
