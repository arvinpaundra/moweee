import { Link } from 'react-router-dom';

const Badge = (props) => {
  const { href } = props;

  return (
    <Link
      to={href}
      className="px-2 bg-transparent border-2 rounded-full border-zpurple text-zpurple font-medium text-xs"
    >
      see all
    </Link>
  );
};

export default Badge;
