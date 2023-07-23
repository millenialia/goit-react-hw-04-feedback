import PropTypes from "prop-types";


export const Section = ({ title, className, children }) => {
  return (
    <section className={className}>
    <h1 className="title">{title}</h1>
      {children}
      </section>
)
}

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
}
