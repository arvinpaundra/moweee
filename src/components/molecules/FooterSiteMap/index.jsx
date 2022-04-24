const SiteMap = (props) => {
  const { href, label, icon } = props;

  return (
    <a
      href={`${href}`}
      title={label}
      className="md:text-base text-sm font-light inline-flex gap-2 items-center hover:underline hover:underline-offset-2"
    >
      {icon ? icon : null} {label}
    </a>
  );
};

export default SiteMap;
